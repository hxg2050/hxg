import { ImageTexture } from "../texture";
import { Transform } from "../transform";
import { Component } from "./Component";

export class Mask extends Component {
    renew = true;

    value?: Transform;
    texture?: ImageTexture;

    
}