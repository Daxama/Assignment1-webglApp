import { hex2rgb } from './js/utils/utils.js'

/**
 * Initializes WebGL2 
 * @returns { WebGL2RenderingContext | null } The WebGL2 context or Null
 */
function initGl( )
{
    const canvas = document.getElementById('canvas');

    if(!canvas){
        console.error('Sorry! No HTML5 Canvas was found');
        return;
    }
    const gl = canvas.getContext('webgl2');

}


/**
 * Clears scene and canvas
 * 
 * Find the Aggie colors here: https://marketingtoolbox.ucdavis.edu/brand-guide/colors
 * Use the 'hex2rgb' function to convert HEX colors
 * 
 * Use app_state.getState( ui_element_name ) to query the UI state
 * For example app_state.getState( 'Canvas Color' ) returns the currently selected color name
 * 
 * @param { WebGL2RenderingContext } gl The WebGL2 context used on the canvas element
 * @param { AppState } app_state The state of the UI
 */
function clearCanvas( gl, app_state )
{   
    gl = canvas.getContext('webgl2');
    let color = app_state.getState( 'Canvas Color' );
    
    if(color === "Aggie Blue"){
        let hex_color = hex2rgb('0000FF');
        hex_color.push(1);
        gl.clearColor(...hex_color);
    }else if(color === "Aggie Gold"){
        let hex_color = hex2rgb('FFBF00');
        hex_color.push(1);
        gl.clearColor(...hex_color);
    }else{
        console.error('Something went wrong when getting the appstate');
        return;
    }
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.viewport(0, 0, 0, 0);
    
}


// JS Module Export -- No need to modify this
export
{

    initGl,
    clearCanvas,

}