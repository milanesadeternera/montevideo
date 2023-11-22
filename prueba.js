//Mostrar modal de bienvenida
$(window).on('load', function(){ 
	$("#welcomeModal").modal('show');
});

//Mostrar Navbar
function DisplayNav(){
	var nav = document.getElementById("navbarControl");
	nav.style.display = "block";
}

//Cargamos los mapas
var I02490 = new ol.layer.Group({
	title:'I02490',
	layers: [
		new ol.layer.GeoImage({
	name: 'I02490_0.jpg',
	source: new ol.source.GeoImage({
	url: "./layers/I02490_0.jpg",
		"imageCenter": [-6254235.368274598, -4149635.656087171],
		"imageScale": [0.5218868398275104,0.5218868398275104],
		"imageRotate": 0.7398215260491402,
		projection: 'EPSG:3857'
		})
	}),
	new ol.layer.GeoImage({
	name: 'I02490_1.jpg',
	source: new ol.source.GeoImage({
	url: "./layers/I02490_1.jpg",
		"imageCenter": [-6252881.9967680145, -4150890.0565411057],
		"imageScale": [0.5222957033264612,0.5222957033264612],
		"imageRotate": 0.7642775884750143,
		projection: 'EPSG:3857'
		})
	}),
	new ol.layer.GeoImage({
	name: 'I02490_5.jpg',
	source: new ol.source.GeoImage({
	url: "./layers/I02490_5.jpg",
		"imageCenter": [-6253669.65458482, -4151744.579291365],
		"imageScale": [0.5208371727735598,0.5208371727735598],
		"imageRotate": 0.7473738911509005,
		projection: 'EPSG:3857'
		})
	}),
	new ol.layer.GeoImage({
	name: 'I02490_4.jpg',
	source: new ol.source.GeoImage({
	url: "./layers/I02490_4.jpg",
		"imageCenter": [-6255015.731682494, -4150496.2572819022],
		"imageScale": [0.5112021335259879,0.5112021335259879],
		"imageRotate": 0.730573625493868,
		projection: 'EPSG:3857'
		})
	}),
	new ol.layer.GeoImage({
	name: 'I02490_6.jpg',
	source: new ol.source.GeoImage({
	url: "./layers/I02490_6.jpg",
		"imageCenter": [-6252319.615907142, -4152988.325786604],
		"imageScale": [0.5274301449010714,0.5274301449010714],
		"imageRotate": 0.7459170082781171,
		projection: 'EPSG:3857'
		})
	}),
	new ol.layer.GeoImage({
	name: 'I02490_2.jpg',
	source: new ol.source.GeoImage({
	url: "./layers/I02490_2.jpg",
		"imageCenter": [-6251533.772521369, -4152127.87760573],
		"imageScale": [0.5211246304947926,0.5211246304947926],
		"imageRotate": 0.7337716499850631,
		projection: 'EPSG:3857'
		})
	}),
	]
});

    var I02492 = new ol.layer.Group({
        title:'I02492',
        layers: [
    		new ol.layer.GeoImage({
		name: 'I02492_5.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_5.jpg",
			"imageCenter": [-6250806.410075606, -4148813.4034407055],
			"imageScale": [0.5251156880456054,0.5251156880456054],
			"imageRotate": 0.74452272817587,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_13.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_13.jpg",
			"imageCenter": [-6252358.617362925, -4150504.405256071],
			"imageScale": [0.5207936501359248,0.5207936501359248],
			"imageRotate": 0.753449212971644,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_0.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_0.jpg",
			"imageCenter": [-6251310.808875083, -4146765.9600473833],
			"imageScale": [0.5146433226711624,0.5146433226711624],
			"imageRotate": 0.7458734638003326,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_1.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_1.jpg",
			"imageCenter": [-6250028.670041323, -4147961.377979194],
			"imageScale": [0.5242339066452811,0.5242339066452811],
			"imageRotate": 0.7455289966374092,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_3.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_3.jpg",
			"imageCenter": [-6247438.612346894, -4150365.384161363],
			"imageScale": [0.5192800672120396,0.5192800672120396],
			"imageRotate": 0.747674667932154,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_4.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_4.jpg",
			"imageCenter": [-6252101.504394389, -4147610.7031201725],
			"imageScale": [0.5221453257471836,0.5221453257471836],
			"imageRotate": 0.7418828240402654,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_6.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_6.jpg",
			"imageCenter": [-6249513.231978729, -4150017.9388491856],
			"imageScale": [0.519472900251822,0.519472900251822],
			"imageRotate": 0.7525691209094718,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_7.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_7.jpg",
			"imageCenter": [-6248242.135390494, -4151207.5072195013],
			"imageScale": [0.5150339962937304,0.5150339962937304],
			"imageRotate": 0.7538083051431453,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_8.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_8.jpg",
			"imageCenter": [-6252876.747729207, -4148461.6728138444],
			"imageScale": [0.5188426333526823,0.5188426333526823],
			"imageRotate": 0.7461113279768369,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_9.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_9.jpg",
			"imageCenter": [-6251583.051799553, -4149655.0152458698],
			"imageScale": [0.5179268985088162,0.5179268985088162],
			"imageRotate": 0.7468273636287169,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_10.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_10.jpg",
			"imageCenter": [-6250295.430588123, -4150854.109313653],
			"imageScale": [0.5213365425023326,0.5213365425023326],
			"imageRotate": 0.7531482116236533,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_12.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_12.jpg",
			"imageCenter": [-6253649.50843961, -4149313.635154188],
			"imageScale": [0.5208756386598566,0.5208756386598566],
			"imageRotate": 0.739899619601344,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_14.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_14.jpg",
			"imageCenter": [-6251074.31137696, -4151706.9014189173],
			"imageScale": [0.5186701521884,0.5186701521884],
			"imageRotate": 0.7532724594627735,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02492_15.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02492_15.jpg",
			"imageCenter": [-6249705.446377099, -4152897.3078622324],
			"imageScale": [0.5543278428224854,0.5543278428224854],
			"imageRotate": 0.7092438344778622,
			projection: 'EPSG:3857'
			})
		}),
	]
});

const imageLayer = new ol.layer.Group({
//    var I02488 = new ol.layer.Group({
        title:'I02488',
        layers: [
    		new ol.layer.GeoImage({
		name: 'I02488_9.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_9.jpg",
			"imageCenter": [-6256712.478284896, -4144848.9746748093],
			"imageScale": [0.5225424014666776,0.5225424014666776],
			"imageRotate": 0.7484689426457678,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_13.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_13.jpg",
			"imageCenter": [-6257494.910254212, -4145688.5089795617],
			"imageScale": [0.522560467707882,0.522560467707882],
			"imageRotate": 0.7523234185997787,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_5.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_5.jpg",
			"imageCenter": [-6255920.822033205, -4144000.001779852],
			"imageScale": [0.5254514734619214,0.5254514734619214],
			"imageRotate": 0.7559907869917196,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_6.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_6.jpg",
			"imageCenter": [-6254574.980609731, -4145277.0037034983],
			"imageScale": [0.523863595216935,0.523863595216935],
			"imageRotate": 0.7554959036659533,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_10.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_10.jpg",
			"imageCenter": [-6255362.428357073, -4146118.4510759693],
			"imageScale": [0.5173676370387322,0.5192819848173462],
			"imageRotate": 0.7567386281611019,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_0.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_0.jpg",
			"imageCenter": [-6256470.525208856, -4141889.3796055913],
			"imageScale": [0.5247016009347262,0.5247016009347262],
			"imageRotate": 0.7582828470926181,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_4.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_4.jpg",
			"imageCenter": [-6257267.138193677, -4142729.0340637923],
			"imageScale": [0.5230827920810343,0.5230827920810343],
			"imageRotate": 0.7640186113326475,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_7.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_7.jpg",
			"imageCenter": [-6253237.37664123, -4146541.5343794054],
			"imageScale": [0.5182861426396588,0.5182861426396588],
			"imageRotate": 0.748836031374498,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_8.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_8.jpg",
			"imageCenter": [-6258059.988786539, -4143571.2595845093],
			"imageScale": [0.5248288032673732,0.5248288032673732],
			"imageRotate": 0.7559563067699824,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_1.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_1.jpg",
			"imageCenter": [-6255121.428867133, -4143162.3846616517],
			"imageScale": [0.516402450738516,0.516402450738516],
			"imageRotate": 0.761638319790275,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_2.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_2.jpg",
			"imageCenter": [-6253781.599995, -4144439.898384111],
			"imageScale": [0.5257862173933778,0.5257862173933778],
			"imageRotate": 0.7555681555988386,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_3.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_3.jpg",
			"imageCenter": [-6252438.609601308, -4145708.6983609046],
			"imageScale": [0.5169170632577292,0.5169170632577292],
			"imageRotate": 0.764496531006104,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_11.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_11.jpg",
			"imageCenter": [-6254022.744323976, -4147386.377851975],
			"imageScale": [0.5226913793564076,0.5226913793564076],
			"imageRotate": 0.7609801540030678,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_12.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_12.jpg",
			"imageCenter": [-6258858.013111567, -4144396.69492067],
			"imageScale": [0.5324745973257227,0.5324745973257227],
			"imageRotate": 0.7687131955631696,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_14.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_14.jpg",
			"imageCenter": [-6256151.324506993, -4146956.5420683366],
			"imageScale": [0.5241003448048284,0.5241003448048284],
			"imageRotate": 0.7582186232035626,
			projection: 'EPSG:3857'
			})
		}),
		new ol.layer.GeoImage({
		name: 'I02488_15.jpg',
		source: new ol.source.GeoImage({
		url: "./layers/I02488_15.jpg",
			"imageCenter": [-6254815.417959862, -4148230.5373559897],
			"imageScale": [0.5249082340988253,0.5249082340988253],
			"imageRotate": 0.7541445646076841,
			projection: 'EPSG:3857'
			})
		}),
	]
});

const basemap = new ol.layer.Tile({
    name: 'Mapa base',
    source: new ol.source.OSM()
})

const map = new ol.Map({
    target: 'map',
//    layers: [basemap,I02490,I02492,I02488],
    layers: [basemap,imageLayer],
    view: new ol.View({
        center: ol.proj.fromLonLat([-56.19138971919159, -34.90553615890344]),
        zoom: 18
    }),
    controls: []
});

var layerSwitcher = new ol.control.LayerSwitcher({ 
  tipLabel: 'Leyenda' 
});

const opacityInput = document.getElementById('opacity-input');
function update() {
    const opacity = parseFloat(opacityInput.value);
    imageLayer.setOpacity(opacity);
  }
opacityInput.addEventListener('input', update);
update();

//map.addControl(layerSwitcher);
//layerSwitcher.showPanel();
