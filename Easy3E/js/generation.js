
var img2_items = [
    { name: "woman11", alt: "Change her outfit to a trench coat." },
    { name: "cat_book", alt: "Replace the cup with a puppy toy." },
    { name: "half_man11", alt: "Put a hat with CVPR printed on it on this man." },
    { name: "mei1", alt: "Add a small pair of wings to the girl." },
    { name: "ania_21", alt: "Replace the round ball on its hat with rabbit ears." },
    { name: "apple1", alt: "Turn the apple on the plate into a pear." },
    { name: "boy1", alt: "Dress the boy in a Superman outfit." },
    { name: "half_man12", alt: "Put a cyberpunk style mask on this man." },
    { name: "house11", alt: "Remove the car." },
    { name: "huoche1", alt: "Replace the cargo area of this truck with a gift box." },
    { name: "lu1", alt: "Remove the pipa from the deer." },
    { name: "ludeng1", alt: "Replace the streetlights with cyberpunk style ones." },
    { name: "man21", alt: "Change the man's outfit to a military uniform." },
    { name: "neza1", alt: "Put a rose in his hand." },
    { name: "office_desks_wooden1", alt: "Add a table lamp on the table." },
    { name: "shubao1", alt: "Remove the decorations from the backpack." },
    { name: "ania_22", alt: "Replace the cake base with pink stool legs." },
    { name: "tiger1", alt: "Replace the tiger head with a dog head." },
    { name: "woman_gudai1", alt: "Replace the lamp in her hand with a bronze pot." },
    { name: "xiaoairen1", alt: "Replace his hat with a knitted hat." },
];


function img2_carousel_item_template(item) {
    return `<div class="x-card clickable" style="min-width: 120px" onclick=\'openWindow(img2_window_template(${JSON.stringify(item)}))\'>
                <div class="x-labels">
                    <div class="x-label">GLB ✓</div>
                </div>
                <div style="width: 100%; aspect-ratio: 2/1">
                    <video autoplay playsinline loop muted height="100%" src="assets/easy3e/${item.name}/video.mp4"></video>
                </div>
                <div class="caption">
                    <div class="x-image-prompt">
                        <img src="assets/easy3e/${item.name}/img.png" alt="${item.alt}">
                    </div>
                </div>
            </div>`;
}

function img2_window_template(item) {
    const model_src = `assets/easy3e/${item.name}/ori.glb`;
    const model_edit_src = `assets/easy3e/${item.name}/edit.glb`;
    const prompt_src = `assets/easy3e/${item.name}/img.png`;

    // 重新定义 SVG，确保它有明确的颜色（这里设为紫色系以匹配渐变）
    const downloadIcon = `<svg style="margin-right: 6px; width: 14px; height: 14px; vertical-align: middle; stroke: #6366f1;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>`;

    // 按钮基础样式：不再直接在这里套用渐变类
    const btnStyle = `display: inline-flex; align-items: center; justify-content: center; flex: 1; padding: 8px 4px; border-radius: 10px; background: white; text-decoration: none; border: 1.5px solid #e5e7eb; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); white-space: nowrap;`;

    return `
    <div class="x-row" style="display: flex; align-items: stretch; width: 880px; max-width: calc(100vw - 32px); padding: 20px; gap: 20px;">
        
        <div style="display: flex; gap: 14px; flex: 2.2;">
            <div style="flex: 1; display: flex; flex-direction: column;">
                <div class="x-gradient-font" style="font-size: 16px; margin-bottom: 8px; text-align: center;">Source Model</div>
                <model-viewer src="${model_src}" camera-controls tone-mapping="natural" shadow-intensity="1" camera-orbit="0deg 75deg 120%"
                    style="width: 100%; height: 340px; background-color: #f9fafb; border-radius: 10px; border: 1px solid #f0f0f0;">
                </model-viewer>
            </div>
            
            <div style="flex: 1; display: flex; flex-direction: column;">
                <div class="x-gradient-font" style="font-size: 16px; margin-bottom: 8px; text-align: center;">Edited Results</div>
                <model-viewer src="${model_edit_src}" camera-controls tone-mapping="natural" shadow-intensity="1" camera-orbit="0deg 75deg 120%"
                    style="width: 100%; height: 340px; background-color: #f9fafb; border-radius: 10px; border: 1px solid #f0f0f0;">
                </model-viewer>
            </div>
        </div>

        <div style="flex: 0.8; min-width: 260px; display: flex; flex-direction: column;">
            
            <div class="x-section-title small" style="margin-top: 0; margin-bottom: 6px;"><div class="x-gradient-font" style="font-size: 16px;">Prompt</div></div>
            <div style="width: 100%; height: 120px; background: #f3f4f6; border-radius: 10px; padding: 10px; display: flex; justify-content: center; align-items: center; margin-bottom: 12px; border: 1px solid #eee;">
                <img src="${prompt_src}" style="height: 100%; width: auto; object-fit: contain; border-radius: 4px;">
            </div>
            
            <div class="x-section-title small" style="margin-bottom: 4px;"><div class="x-gradient-font" style="font-size: 16px;">Description</div></div>
            <div style="margin-bottom: 12px; flex-grow: 1;">
                <p style="font-family: 'Segoe UI', system-ui; font-size: 12.5px; color: #4b5563; line-height: 1.3; margin: 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.alt}</p>
            </div>

            <div class="x-section-title small" style="margin-bottom: 8px;"><div class="x-gradient-font" style="font-size: 16px;">Download</div></div>
            <div style="display: flex; gap: 8px; width: 100%;">
                <a href="${model_src}" download="${item.name}_ori.glb" style="${btnStyle}" onmouseover="this.style.borderColor='#d1d5db'" onmouseout="this.style.borderColor='#e5e7eb'">
                    ${downloadIcon}
                    <span class="x-gradient-font" style="font-size: 11px; font-weight: 700; margin-left: 2px;">Source Model</span>
                </a>
                <a href="${model_edit_src}" download="${item.name}_edit.glb" style="${btnStyle}" onmouseover="this.style.borderColor='#d1d5db'" onmouseout="this.style.borderColor='#e5e7eb'">
                    ${downloadIcon}
                    <span class="x-gradient-font" style="font-size: 11px; font-weight: 700; margin-left: 2px;">Edited Model</span>
                </a>
            </div>
        </div>
    </div>`;
}