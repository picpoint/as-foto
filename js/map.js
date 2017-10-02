var map;
DG.then(function () {
	map = DG.map('map', {
		center: [45.028722, 41.973369],
		zoom: 18
	});

	DG.marker([45.028780, 41.973340]).addTo(map).bindPopup('г. Ставрополь, Серова, 274а 2 этаж, АС-фото, фотосалон! +7 (9624) 400-107  E-mail: as_foto@mail.ru');
});