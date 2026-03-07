var img2_items = [
    { name: "ania_21", alt: "Editing result for ania_2" },
    { name: "ania_22", alt: "Editing result for ania_2" },
    { name: "apple1", alt: "Editing result for apple" },
    { name: "boy1", alt: "Editing result for boy" },
    { name: "cake_11", alt: "Editing result for cake_1" },
    { name: "chuang1", alt: "Editing result for chuang" },
    { name: "half_man11", alt: "Editing result for half_man1" },
    { name: "half_man12", alt: "Editing result for half_man1" },
    { name: "house11", alt: "Editing result for house1" },
    { name: "house31", alt: "Editing result for house3" },
    { name: "huoche1", alt: "Editing result for huoche" },
    { name: "lu1", alt: "Editing result for lu" },
    { name: "ludeng1", alt: "Editing result for ludeng" },
    { name: "man21", alt: "Editing result for man2" },
    { name: "ma_21", alt: "Editing result for ma_2" },
    { name: "mei1", alt: "Editing result for mei" },
    { name: "neza1", alt: "Editing result for neza" },
    { name: "office_desks_wooden1", alt: "Editing result for office_desks_wooden" },
    { name: "shubao1", alt: "Editing result for shubao" },
    { name: "tiger1", alt: "Editing result for tiger" },
    { name: "woman11", alt: "Editing result for woman1" },
    { name: "woman31", alt: "Editing result for woman3" },
    { name: "woman32", alt: "Editing result for woman3" },
    { name: "woman_gudai1", alt: "Editing result for woman_gudai" },
    { name: "xiaoairen1", alt: "Editing result for xiaoairen" },
];

function img2_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick='openWindow(img2_window_template(${JSON.stringify(item)}))'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1; overflow: hidden; border-radius: 8px; background-color: #f5f5f5;">
                    <img src="assets/A/${item.name}/img.png" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="caption">
                    <div class="x-image-prompt" style="text-align: center; margin-top: 8px; font-weight: bold; color: #555;">
                        Click to view 3D
                    </div>
                </div>
            </div>`;
}
function img2_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(img2_window_template(${JSON.stringify(item)}))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 1">
                    <video autoplay playsinline loop muted height="100%" src="assets/img2/videos/${item.video}"></video>
                </div>
                <div class="caption">
                    <div class="x-image-prompt">
                        <img src="assets/img2/images/${item.prompt}" alt="${item.alt}">
                    </div>
                </div>
            </div>`;
}
//function img2_carousel_item_template(item) {
    //return `<div class="x-card clickable" style="min-width: 120px" onclick='openWindow(img2_window_template(${JSON.stringify(item)}))'>
                //<div class="x-labels">
                   // <div class="x-label">GLB ✓</div>
               // </div>
                //<div style="width: 100%; aspect-ratio: 1">
               //     <video autoplay playsinline loop muted height="100%" src="assets/A/${item.name}/video.mp4"></video>
               // </div>
               // <div class="caption">
               //     <div class="x-image-prompt">
               //         <img src="assets/A/${item.name}/img.png" alt="${item.alt}">
              //      </div>
             //   </div>
          //  </div>`;
//}

function img2_window_template(item) {
    // 按照 A/name/ 逻辑拼接路径
    const model_src = `assets/easy3e/${item.name}/ori.glb`;
    const model_edit_src = `assets/easy3e/${item.name}/edit.glb`;
    const prompt_src = `assets/easy3e/${item.name}/img.png`;

    return `
    <div class="x-row" style="align-items: flex-start; flex-wrap: wrap; width: 1100px; max-width: calc(100vw - 32px); padding: 20px;">
        <div style="display: flex; gap: 20px; flex: 2; min-width: 600px;">
            <div style="flex: 1; text-align: center;">
                <div class="x-gradient-font" style="font-size: 20px; margin-bottom: 10px;">Original Model</div>
                <model-viewer src="${model_src}" camera-controls tone-mapping="natural" shadow-intensity="1" 
                    style="width: 100%; height: 450px; background-color: #f5f5f5; border-radius: 12px;">
                </model-viewer>
            </div>
            
            <div style="flex: 1; text-align: center;">
                <div class="x-gradient-font" style="font-size: 20px; margin-bottom: 10px;">Edited (Easy3E)</div>
                <model-viewer src="${model_edit_src}" camera-controls tone-mapping="natural" shadow-intensity="1" 
                    style="width: 100%; height: 450px; background-color: #f5f5f5; border-radius: 12px;">
                </model-viewer>
            </div>
        </div>

        <div style="flex: 1; min-width: 250px; margin-left: 20px;">
            <div class="x-section-title small" style="margin-top: 0;"><div class="x-gradient-font">Condition Image</div></div>
            <div class="x-image-prompt" style="margin-bottom: 20px;">
                <img src="${prompt_src}" style="width: 100%; border-radius: 8px; border: 1px solid #ddd;">
            </div>
            <div class="x-section-title small"><div class="x-gradient-font">Description</div></div>
            <p style="font-family: 'Segoe UI'; font-size: 14px; color: #666;">${item.alt}</p>
        </div>
    </div>`;
}
