window.caseData = {
  spaces: [
    { id: "courtyard", name: "Castle courtyard", en: "Castle Courtyard", ids: ["A03", "A06", "A07", "A10"], description: "Explore the medieval castle’s spatial fabric through its courtyard, brick walls, towers, and arches." },
    { id: "bridge", name: "Ponte Scaligero", en: "Scaliger Bridge", ids: ["A04", "A08", "A11", "D05", "D06"], description: "Examine the castle’s defensive role and urban scale through the relationship between the bridge, river, and towers." },
    { id: "cangrande", name: "Cangrande statue space", en: "Cangrande Space", ids: ["B03", "B05", "B12", "C02", "C03"], description: "Compare the relationships between the statue, display platform, stairs, and viewing routes." },
    { id: "stair", name: "Scarpa stairs and walkways", en: "Stairs & Walkways", ids: ["B02", "B03", "B04", "B11", "B13", "B14", "B15"], description: "Observe modern interventions through steps, materials, handrails, and historic brick walls." },
    { id: "sculpture", name: "Sculpture galleries", en: "Sculpture Gallery", ids: ["B06", "B07", "C02", "C05", "C07"], description: "Distinguish sculptures, plinths, architectural arches, and exhibition spaces." },
    { id: "painting", name: "Painting galleries", en: "Painting Gallery", ids: ["B08", "C04", "C06"], description: "Examine paintings, display walls, table-like display structures, and sequences of galleries." }
  ],
  timeline: [
    { layer: "L1", period: "From 1354", title: "Scaliger Castle", text: "Castelvecchio and its bridge were built as part of the city’s defenses. Observe the brick walls, battlements, towers, and arches.", link: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=72434" },
    { layer: "L2", period: "1924–1926", title: "Museum conversion and early restoration", text: "The castle’s transition from a military building to a public museum shaped later discussions of exhibition design and conservation.", link: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=98494" },
    { layer: "L3", period: "1958–1974", title: "Carlo Scarpa’s interventions and exhibition design", text: "Scarpa’s collaboration with Licisco Magagnato reconfigured restoration, circulation, materials, and ways of viewing the exhibits.", link: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=44455&tt=museo" },
    { layer: "L4", period: "Present day", title: "Collections, conservation, and public interpretation", text: "Exhibitions, conservation, and digital initiatives continue to connect the building and its collections with public learning.", link: "https://museodicastelvecchio.comune.verona.it/" }
  ],
  evidence: [
    { id: "B03", claim: "The visible stairs and platforms create a vertical viewing space. Attribution to Scarpa requires verification against documentary sources and drawings.", status: "Pending documentary verification", objects: "stair · platform · stone", source: "Carlo Scarpa e Castelvecchio", url: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=44455&tt=museo" },
    { id: "C02", claim: "The equestrian statue and its platform form an exhibition arrangement. The statue’s identity and Scarpa’s display strategy can be checked against museum resources.", status: "Pending collection-record verification", objects: "sculpture · display pedestal · brick wall", source: "Cangrande resources", url: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=98495" },
    { id: "A04", claim: "The bridge, towers, battlements, and brick walls are directly visible. Specific restoration phases cannot be established from the photograph alone.", status: "Pending historical-source verification", objects: "bridge · tower · crenellation · brick wall", source: "Official Castelvecchio historical sources", url: "https://museodicastelvecchio.comune.verona.it/nqcontent.cfm?a_id=72434" }
  ]
};
