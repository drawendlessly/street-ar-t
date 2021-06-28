AFRAME.registerComponent("url-asset-manager", {
    
    init: function() {

        const invisibleClassName = "invisible";
    
        const entity = this.el.sceneEl.querySelector("#asset-entity");

        entity.addEventListener("model-loaded", () => {
            
            document.querySelector("#loading").classList.toggle(invisibleClassName);

        });

        entity.addEventListener("model-error", () => {

            document.querySelector("#loading").classList.toggle(invisibleClassName);

            document.querySelector("#error").classList.toggle(invisibleClassName);

        });

        const assetNumber = new URLSearchParams(window.location.search).get("a");

        const modelUrl = assetNumber ? `url(assets/${assetNumber}.glb)` : "assets/nonexisting_asset";

        entity.setAttribute("gltf-model", modelUrl);
    
    }

});
