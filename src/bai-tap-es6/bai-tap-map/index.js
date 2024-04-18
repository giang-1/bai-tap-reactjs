const birds = [
    { id: "DV8", name: "Eurasian Collared-Dove", type: "Dove" },
    { id: "HK12", name: "Bald Eagle", type: "Hawk" },
    { id: "HK6", name: "Cooper's Hawk", type: "Hawk" },
    { id: "SP11", name: "Bell's Sparrow", type: "Sparrow" },
    { id: "DV2", name: "Mourning Dove", type: "Dove" }
];
function showBirdInfo() {
    birds.map((bird) => {
        return `

<div class="col-md-4 mb-4" class="card" style="width: 18rem;" >
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">id :${bird.id}</li>
            <li class="list-group-item">name :${bird.name}</li>
            <li class="list-group-item">type ${bird.type}</li>
        </ul>
    </div>
</div>  
        `
    })
}