
attribute float a_MaxSize;
attribute vec2 a_Position;
attribute vec2 a_TexCoord;
attribute mat3 a_Matrix;

varying vec2 v_TexCoord;


void main() {
    vec2 zeroToOne = a_Position;
    gl_Position = vec4(a_Matrix * vec3(zeroToOne, 1.0), 1.0);
    v_TexCoord = a_TexCoord;
}