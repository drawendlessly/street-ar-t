/**
 * A basic AFrame component to handle the resolution
 * of the model to display from the URL of the page
 * The model displayed must be a gltF v2 model
 */
const urlAssetManager = {

    /**
     * Everytihng should work with defaults
     * If you change some values refering to the html 
     * (like the ids of the div for the messages)
     * don't forget to update html and css accordingly!
     */
    schema: {
        assetRoot: {
            type: "string",
            default: "assets"
        },
        assetExtension: {
            type: "string",
            default: ".glb"
        },
        invalidAsset: {
            type: "string",
            default: "nonexisting_asset"
        },
        queryParam: {
            type: "string",
            default: "a"
        },
        invisibleClassName: {
            type: "string",
            default: "invisible"
        },
        loadingId: {
            type: "string",
            default: "loading-model-message"
        },
        errorId: {
            type: "string",
            default: "error-model-loading-message"
        },
        markerLostId: {
            type: "string",
            default : "marker-lost-message"
        },
        entityId: {
            type: "string",
            default: "asset-entity"
        },
        markerId: {
            type: "string",
            default: "marker"
        }
    },
    
    /**
     * The model to display is described in the defined queryParam of the URL.
     * Its resolution is `${assetRoot}/${valueOfTheQueryParam}${assetExtension}`.
     * If no model is found at given path, the `#${errorId}` is displayed
     * The `#${loadingId}` is displayed while the model is loading from the given path
     * The `#${markerlostId}` is displayed as soon as the marker is not visible
     * Nothing special is done to handle model that would be too big to be rendered in a browser.
     * Nothing is done about the initial size of your model (displayed at minScale of [0.3, 0.3, 0.3])
     * Nothing is done about the initial postion of the displayed model.
     * Please test and modify the html with appropriate values and generate models that feet the common configuration
     */
    init: function() {

        const marker = this.el.sceneEl.querySelector(`#${this.data.markerId}`);

        const markerMessage = document.querySelector(`#${this.data.markerLostId}`);

        marker.addEventListener("markerFound", () => {
            markerMessage.classList.add(this.data.invisibleClassName);
        });

        marker.addEventListener("markerLost", () => {
            markerMessage.classList.remove(this.data.invisibleClassName);
        });

        const entity = this.el.sceneEl.querySelector(`#${this.data.entityId}`);

        const loadingMessage = document.querySelector(`#${this.data.loadingId}`);

        const errorMessage = document.querySelector(`#${this.data.errorId}`);

        entity.addEventListener("model-loaded", () => {
            
            loadingMessage.classList.toggle(this.data.invisibleClassName);

            if (!marker.object3D.visible) {
                markerMessage.classList.remove(this.data.invisibleClassName);
            }

        });

        entity.addEventListener("model-error", () => {
            
            loadingMessage.classList.toggle(this.data.invisibleClassName);
            
            errorMessage.classList.toggle(this.data.invisibleClassName);

            markerMessage.classList.add(this.data.invisibleClassName);

        });

        const assetNumber = new URLSearchParams(window.location.search).get(this.data.queryParam);

        const assetReference = assetNumber ? assetNumber : this.data.invalidAsset;

        const modelUrl = `url(${this.data.assetRoot}/${assetReference}${this.data.assetExtension})`;

        entity.setAttribute("gltf-model", modelUrl);
    
    }

};

AFRAME.registerComponent("url-asset-manager", urlAssetManager);
