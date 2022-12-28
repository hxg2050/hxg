export default interface IComponent {
    start(): void;
    update(): void;
    destroy(): void;
    onDestroy(): void;
}