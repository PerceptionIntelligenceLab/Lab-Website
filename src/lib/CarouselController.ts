export type Direction = 'left' | 'right';

export class CarouselController {
  private readonly el: HTMLElement;
  private readonly duration: number;
  private dragging = false;
  private originX = 0;
  private originTx = 0;

  constructor(el: HTMLElement, duration = 140) {
    this.el = el;
    this.duration = duration;
  }

  get isDragging(): boolean {
    return this.dragging;
  }

  pause(tx?: number): void {
    this.el.style.animationPlayState = 'paused';
    if (typeof tx === 'number') this.el.style.transform = `translateX(${tx}px)`;
  }

  resume(): void {
    this.el.style.animationPlayState = '';
  }

  nudge(dir: Direction, itemCount: number): void {
    const step = this.duration / Math.max(1, itemCount * 2);
    const current = parseFloat(this.el.style.animationDelay || '0');
    const next = dir === 'right' ? current - step : current + step;
    this.el.style.animationDelay = `${Math.min(0, Math.max(-this.duration, next))}s`;
  }

  dragStart(clientX: number): void {
    this.dragging = true;
    this.originX = clientX;
    this.originTx = this.currentTranslateX();
    this.pause(this.originTx);
  }

  dragMove(clientX: number): void {
    if (!this.dragging) return;
    const delta = clientX - this.originX;
    this.el.style.transform = `translateX(${this.originTx + delta}px)`;
  }

  dragEnd(): void {
    if (!this.dragging) return;
    this.dragging = false;
    const tx = new DOMMatrix(this.el.style.transform).m41;
    this.commitTransform(tx);
  }

  private currentTranslateX(): number {
    return new DOMMatrix(getComputedStyle(this.el).transform).m41;
  }

  private commitTransform(tx: number): void {
    const half = this.el.scrollWidth / 2 || 1;
    const clamped = Math.min(0, Math.max(-half, tx));
    const progress = -clamped / half;
    this.el.style.transform = '';
    this.el.style.animationDelay = `${-(progress * this.duration)}s`;
    this.el.style.animationPlayState = '';
  }
}
