window.caseData = {
  spaces: [
    { id: "courtyard", name: "城堡庭院", en: "Castle Courtyard", ids: ["A03", "A06", "A07", "A10"], description: "通过庭院、砖墙、塔楼与拱券理解中世纪城堡的空间基底。" },
    { id: "bridge", name: "Ponte Scaligero", en: "Scaliger Bridge", ids: ["A04", "A08", "A11", "D05", "D06"], description: "从桥梁、河道与塔楼的关系理解城堡的防御性和城市尺度。" },
    { id: "cangrande", name: "Cangrande 雕像空间", en: "Cangrande Space", ids: ["B03", "B05", "B12", "C02", "C03"], description: "比较雕像、展示平台、楼梯与观看路径之间的关系。" },
    { id: "stair", name: "Scarpa 楼梯与步道", en: "Stairs & Walkways", ids: ["B02", "B03", "B04", "B11", "B13", "B14", "B15"], description: "观察踏步、材料、扶手与历史砖墙之间的现代介入。" },
    { id: "sculpture", name: "雕塑展厅", en: "Sculpture Gallery", ids: ["B06", "B07", "C02", "C05", "C07"], description: "区分雕塑、展台、建筑拱券与展陈空间。" },
    { id: "painting", name: "绘画展厅", en: "Painting Gallery", ids: ["B08", "C04", "C06"], description: "研究绘画、展墙、桌式展示构件与连续展厅空间。" }
  ],
  timeline: [
    { layer: "L1", period: "1354 起", title: "Scaliger 城堡", text: "Castelvecchio 与其桥梁作为城市防御体系的一部分建立；重点观察砖墙、城垛、塔楼与拱券。", link: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=72434" },
    { layer: "L2", period: "1924–1926", title: "博物馆化与早期修缮", text: "城堡从军事建筑转向公共博物馆，形成后续展陈与保护讨论的基础。", link: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=98494" },
    { layer: "L3", period: "1958–1974", title: "Carlo Scarpa 改造与展陈", text: "Scarpa 与 Licisco Magagnato 的合作重组了修复、动线、材料与展品观看方式。", link: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=44455&tt=museo" },
    { layer: "L4", period: "当代", title: "馆藏、维护与公共解释", text: "博物馆持续通过展览、维护和数字化项目使建筑、馆藏与公众学习发生关联。", link: "https://museodicastelvecchio.comune.verona.it/" }
  ],
  evidence: [
    { id: "B03", claim: "图中可见的楼梯与平台构成垂直观看空间；其 Scarpa 归属需要文献与图纸核验。", status: "待文献核验", objects: "stair · platform · stone", source: "Carlo Scarpa e Castelvecchio", url: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=44455&tt=museo" },
    { id: "C02", claim: "骑马雕像与展示平台共同构成展陈关系；雕像身份与 Scarpa 的展示策略可由馆方专题进一步核验。", status: "待馆藏核验", objects: "sculpture · display pedestal · brick wall", source: "Cangrande 主题资料", url: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=98495" },
    { id: "A04", claim: "桥梁、塔楼、城垛与砖墙可由图像直接观察；其具体修复阶段不能仅凭照片确认。", status: "待历史资料核验", objects: "bridge · tower · crenellation · brick wall", source: "Castelvecchio 官方历史资料", url: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=72434" }
  ]
};
