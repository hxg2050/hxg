#ifdef GL_ES
    precision mediump float;
#endif
uniform sampler2D u_Sampler;
uniform float u_Alpha;
varying vec2 v_TexCoord;
void main() {
    vec4 color = vec4(texture2D(u_Sampler, v_TexCoord).rgba);
    if (u_Alpha == 0.0 || color.a == 0.0) {
        return;
    }

    color.rgb *= color.a;

    if (u_Alpha > 0.0) {
        color.rgb *= u_Alpha;
    }
    gl_FragColor = color;
}