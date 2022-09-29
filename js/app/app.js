'use strict'

import Input from "../input/input.js"
import AppState from "./appstate.js"
import { hex2rgb } from "../utils/utils.js"

import { initGl, clearCanvas } from '../../assignment1.js'

class App
{

    constructor( )
    {

        console.log( "Initializing App" )

        // canvas & gl
        this.canvas = document.getElementById( "canvas" )
        this.canvas.addEventListener( "contextmenu", event => event.preventDefault( ) );
        this.gl = initGl( )

        // resize handling
        this.resizeToDisplay( )
        window.onresize = this.resizeToDisplay.bind( this )

        // app state
        this.app_state = new AppState( this )

    }

    /** 
     * Resizes canvas to pixel-size-corrected display size
     */
    resizeToDisplay( )
    {

        this.canvas.width = this.canvas.clientWidth
        this.canvas.height = this.canvas.clientHeight

    }

    /**
     * Starts render loop
     */
    start( )
    {

        requestAnimationFrame( ( ) =>
        {

            this.update( )

        } )

    }

    /**
     * Called every frame, triggers input and app state update and renders a frame
     */
    update( )
    {

        this.app_state.update( )
        Input.update( )
        this.render( )
        requestAnimationFrame( ( ) =>
        {

            this.update( )

        } )

    }

    /**
     * Main render loop
     */
    render( )
    {

        // clear the screen
        clearCanvas( this.gl, this.app_state )

    }
}

export default App
