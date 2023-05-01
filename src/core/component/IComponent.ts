export interface IComponent {
    start?(): void;
    update?(time: number): void;
    destroy?(): void;
    onDestroy?(): void;
}