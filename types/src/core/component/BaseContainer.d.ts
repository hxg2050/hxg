import { Component } from "./Component";
import { Transform } from "../transform";
import { IContainer } from "./IContainer";
export declare abstract class BaseContainer extends Component implements IContainer {
    constructor(transform: Transform);
    start(): void;
}
