var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KotaYogyakarta_1 = new ol.format.GeoJSON();
var features_KotaYogyakarta_1 = format_KotaYogyakarta_1.readFeatures(json_KotaYogyakarta_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KotaYogyakarta_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KotaYogyakarta_1.addFeatures(features_KotaYogyakarta_1);
var lyr_KotaYogyakarta_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KotaYogyakarta_1, 
                style: style_KotaYogyakarta_1,
                popuplayertitle: "Kota Yogyakarta",
                interactive: false,
                title: '<img src="styles/legend/KotaYogyakarta_1.png" /> Kota Yogyakarta'
            });
var format_Sungai_2 = new ol.format.GeoJSON();
var features_Sungai_2 = format_Sungai_2.readFeatures(json_Sungai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_2.addFeatures(features_Sungai_2);
var lyr_Sungai_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_2, 
                style: style_Sungai_2,
                popuplayertitle: "Sungai",
                interactive: false,
                title: '<img src="styles/legend/Sungai_2.png" /> Sungai'
            });
var format_Jalan_3 = new ol.format.GeoJSON();
var features_Jalan_3 = format_Jalan_3.readFeatures(json_Jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_3.addFeatures(features_Jalan_3);
var lyr_Jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_3, 
                style: style_Jalan_3,
                popuplayertitle: "Jalan",
                interactive: false,
                title: '<img src="styles/legend/Jalan_3.png" /> Jalan'
            });
var format_SAHMuraiMinggiranGgMurai_4 = new ol.format.GeoJSON();
var features_SAHMuraiMinggiranGgMurai_4 = format_SAHMuraiMinggiranGgMurai_4.readFeatures(json_SAHMuraiMinggiranGgMurai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHMuraiMinggiranGgMurai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHMuraiMinggiranGgMurai_4.addFeatures(features_SAHMuraiMinggiranGgMurai_4);
var lyr_SAHMuraiMinggiranGgMurai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHMuraiMinggiranGgMurai_4, 
                style: style_SAHMuraiMinggiranGgMurai_4,
                popuplayertitle: "SAH Murai & Minggiran Gg Murai",
                interactive: true,
                title: '<img src="styles/legend/SAHMuraiMinggiranGgMurai_4.png" /> SAH Murai & Minggiran Gg Murai'
            });
var format_SAHMuraiMinggiranGgMangga_5 = new ol.format.GeoJSON();
var features_SAHMuraiMinggiranGgMangga_5 = format_SAHMuraiMinggiranGgMangga_5.readFeatures(json_SAHMuraiMinggiranGgMangga_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHMuraiMinggiranGgMangga_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHMuraiMinggiranGgMangga_5.addFeatures(features_SAHMuraiMinggiranGgMangga_5);
var lyr_SAHMuraiMinggiranGgMangga_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHMuraiMinggiranGgMangga_5, 
                style: style_SAHMuraiMinggiranGgMangga_5,
                popuplayertitle: "SAH Murai & Minggiran Gg Mangga",
                interactive: true,
                title: '<img src="styles/legend/SAHMuraiMinggiranGgMangga_5.png" /> SAH Murai & Minggiran Gg Mangga'
            });
var format_SAHGondokusuman_6 = new ol.format.GeoJSON();
var features_SAHGondokusuman_6 = format_SAHGondokusuman_6.readFeatures(json_SAHGondokusuman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHGondokusuman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHGondokusuman_6.addFeatures(features_SAHGondokusuman_6);
var lyr_SAHGondokusuman_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHGondokusuman_6, 
                style: style_SAHGondokusuman_6,
                popuplayertitle: "SAH Gondokusuman",
                interactive: true,
                title: '<img src="styles/legend/SAHGondokusuman_6.png" /> SAH Gondokusuman'
            });
var format_SAHJlTinalan_7 = new ol.format.GeoJSON();
var features_SAHJlTinalan_7 = format_SAHJlTinalan_7.readFeatures(json_SAHJlTinalan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHJlTinalan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHJlTinalan_7.addFeatures(features_SAHJlTinalan_7);
var lyr_SAHJlTinalan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHJlTinalan_7, 
                style: style_SAHJlTinalan_7,
                popuplayertitle: "SAH Jl Tinalan",
                interactive: true,
                title: '<img src="styles/legend/SAHJlTinalan_7.png" /> SAH Jl Tinalan'
            });
var format_SAHRW9Prenggan_8 = new ol.format.GeoJSON();
var features_SAHRW9Prenggan_8 = format_SAHRW9Prenggan_8.readFeatures(json_SAHRW9Prenggan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHRW9Prenggan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHRW9Prenggan_8.addFeatures(features_SAHRW9Prenggan_8);
var lyr_SAHRW9Prenggan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHRW9Prenggan_8, 
                style: style_SAHRW9Prenggan_8,
                popuplayertitle: "SAH RW 9 Prenggan",
                interactive: true,
                title: '<img src="styles/legend/SAHRW9Prenggan_8.png" /> SAH RW 9 Prenggan'
            });
var format_SAHKampKranon2023_9 = new ol.format.GeoJSON();
var features_SAHKampKranon2023_9 = format_SAHKampKranon2023_9.readFeatures(json_SAHKampKranon2023_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHKampKranon2023_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHKampKranon2023_9.addFeatures(features_SAHKampKranon2023_9);
var lyr_SAHKampKranon2023_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHKampKranon2023_9, 
                style: style_SAHKampKranon2023_9,
                popuplayertitle: "SAH Kamp Kranon 2023",
                interactive: true,
                title: '<img src="styles/legend/SAHKampKranon2023_9.png" /> SAH Kamp Kranon 2023'
            });
var format_SAHGedongtengen_10 = new ol.format.GeoJSON();
var features_SAHGedongtengen_10 = format_SAHGedongtengen_10.readFeatures(json_SAHGedongtengen_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHGedongtengen_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHGedongtengen_10.addFeatures(features_SAHGedongtengen_10);
var lyr_SAHGedongtengen_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHGedongtengen_10, 
                style: style_SAHGedongtengen_10,
                popuplayertitle: "SAH Gedongtengen",
                interactive: true,
                title: '<img src="styles/legend/SAHGedongtengen_10.png" /> SAH Gedongtengen'
            });
var format_SAHRW12Giwangan_11 = new ol.format.GeoJSON();
var features_SAHRW12Giwangan_11 = format_SAHRW12Giwangan_11.readFeatures(json_SAHRW12Giwangan_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHRW12Giwangan_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHRW12Giwangan_11.addFeatures(features_SAHRW12Giwangan_11);
var lyr_SAHRW12Giwangan_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHRW12Giwangan_11, 
                style: style_SAHRW12Giwangan_11,
                popuplayertitle: "SAH RW 12 Giwangan",
                interactive: true,
                title: '<img src="styles/legend/SAHRW12Giwangan_11.png" /> SAH RW 12 Giwangan'
            });
var format_SAHJlPugeranTimur_12 = new ol.format.GeoJSON();
var features_SAHJlPugeranTimur_12 = format_SAHJlPugeranTimur_12.readFeatures(json_SAHJlPugeranTimur_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHJlPugeranTimur_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHJlPugeranTimur_12.addFeatures(features_SAHJlPugeranTimur_12);
var lyr_SAHJlPugeranTimur_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHJlPugeranTimur_12, 
                style: style_SAHJlPugeranTimur_12,
                popuplayertitle: "SAH Jl Pugeran Timur",
                interactive: true,
                title: '<img src="styles/legend/SAHJlPugeranTimur_12.png" /> SAH Jl Pugeran Timur'
            });
var format_SAHWirogunanJlAbimanyu_13 = new ol.format.GeoJSON();
var features_SAHWirogunanJlAbimanyu_13 = format_SAHWirogunanJlAbimanyu_13.readFeatures(json_SAHWirogunanJlAbimanyu_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHWirogunanJlAbimanyu_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHWirogunanJlAbimanyu_13.addFeatures(features_SAHWirogunanJlAbimanyu_13);
var lyr_SAHWirogunanJlAbimanyu_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHWirogunanJlAbimanyu_13, 
                style: style_SAHWirogunanJlAbimanyu_13,
                popuplayertitle: "SAH Wirogunan Jl Abimanyu",
                interactive: true,
                title: '<img src="styles/legend/SAHWirogunanJlAbimanyu_13.png" /> SAH Wirogunan Jl Abimanyu'
            });
var format_SAHDrSutomoJlWidayati_14 = new ol.format.GeoJSON();
var features_SAHDrSutomoJlWidayati_14 = format_SAHDrSutomoJlWidayati_14.readFeatures(json_SAHDrSutomoJlWidayati_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHDrSutomoJlWidayati_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHDrSutomoJlWidayati_14.addFeatures(features_SAHDrSutomoJlWidayati_14);
var lyr_SAHDrSutomoJlWidayati_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHDrSutomoJlWidayati_14, 
                style: style_SAHDrSutomoJlWidayati_14,
                popuplayertitle: "SAH Dr Sutomo Jl.Widayati",
                interactive: true,
                title: '<img src="styles/legend/SAHDrSutomoJlWidayati_14.png" /> SAH Dr Sutomo Jl.Widayati'
            });
var format_SAHWirogunanJlTohpati_15 = new ol.format.GeoJSON();
var features_SAHWirogunanJlTohpati_15 = format_SAHWirogunanJlTohpati_15.readFeatures(json_SAHWirogunanJlTohpati_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SAHWirogunanJlTohpati_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SAHWirogunanJlTohpati_15.addFeatures(features_SAHWirogunanJlTohpati_15);
var lyr_SAHWirogunanJlTohpati_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SAHWirogunanJlTohpati_15, 
                style: style_SAHWirogunanJlTohpati_15,
                popuplayertitle: "SAH Wirogunan Jl Tohpati",
                interactive: true,
                title: '<img src="styles/legend/SAHWirogunanJlTohpati_15.png" /> SAH Wirogunan Jl Tohpati'
            });
var group_TitikSumurResapanAirHujan = new ol.layer.Group({
                                layers: [lyr_SAHMuraiMinggiranGgMurai_4,lyr_SAHMuraiMinggiranGgMangga_5,lyr_SAHGondokusuman_6,lyr_SAHJlTinalan_7,lyr_SAHRW9Prenggan_8,lyr_SAHKampKranon2023_9,lyr_SAHGedongtengen_10,lyr_SAHRW12Giwangan_11,lyr_SAHJlPugeranTimur_12,lyr_SAHWirogunanJlAbimanyu_13,lyr_SAHDrSutomoJlWidayati_14,lyr_SAHWirogunanJlTohpati_15,],
                                fold: "open",
                                title: "Titik Sumur Resapan Air Hujan"});

lyr_OpenStreetMap_0.setVisible(true);lyr_KotaYogyakarta_1.setVisible(true);lyr_Sungai_2.setVisible(true);lyr_Jalan_3.setVisible(true);lyr_SAHMuraiMinggiranGgMurai_4.setVisible(true);lyr_SAHMuraiMinggiranGgMangga_5.setVisible(true);lyr_SAHGondokusuman_6.setVisible(true);lyr_SAHJlTinalan_7.setVisible(true);lyr_SAHRW9Prenggan_8.setVisible(true);lyr_SAHKampKranon2023_9.setVisible(true);lyr_SAHGedongtengen_10.setVisible(true);lyr_SAHRW12Giwangan_11.setVisible(true);lyr_SAHJlPugeranTimur_12.setVisible(true);lyr_SAHWirogunanJlAbimanyu_13.setVisible(true);lyr_SAHDrSutomoJlWidayati_14.setVisible(true);lyr_SAHWirogunanJlTohpati_15.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KotaYogyakarta_1,lyr_Sungai_2,lyr_Jalan_3,group_TitikSumurResapanAirHujan];
lyr_KotaYogyakarta_1.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Sungai_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL': 'PL', 'SUMBER': 'SUMBER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_SAHMuraiMinggiranGgMurai_4.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHMuraiMinggiranGgMangga_5.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHGondokusuman_6.set('fieldAliases', {'No_Sample': 'Title', 'latitude': 'latitude', 'longitude': 'longitude', 'Gambar': 'Gambar', });
lyr_SAHJlTinalan_7.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHRW9Prenggan_8.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHKampKranon2023_9.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHGedongtengen_10.set('fieldAliases', {'No_Sample': 'Title', 'latitude': 'latitude', 'longitude': 'longitude', 'Gambar': 'Gambar', });
lyr_SAHRW12Giwangan_11.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHJlPugeranTimur_12.set('fieldAliases', {'Title': 'Title', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Gambar': 'Gambar', });
lyr_SAHWirogunanJlAbimanyu_13.set('fieldAliases', {'No_Sample': 'Title', 'latitude': 'latitude', 'longitude': 'longitude', 'Gambar': 'Gambar', });
lyr_SAHDrSutomoJlWidayati_14.set('fieldAliases', {'No_Sample': 'Title', 'latitude': 'latitude', 'longitude': 'longitude', 'Gambar': 'Gambar', });
lyr_SAHWirogunanJlTohpati_15.set('fieldAliases', {'No_Sample': 'Title', 'latitude': 'latitude', 'longitude': 'longitude', 'Gambar': 'Gambar', });
lyr_KotaYogyakarta_1.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Sungai_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_3.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_LENG': '', 'SHAPE_LEN': '', });
lyr_SAHMuraiMinggiranGgMurai_4.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHMuraiMinggiranGgMangga_5.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHGondokusuman_6.set('fieldImages', {'No_Sample': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHJlTinalan_7.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHRW9Prenggan_8.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHKampKranon2023_9.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHGedongtengen_10.set('fieldImages', {'No_Sample': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHRW12Giwangan_11.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHJlPugeranTimur_12.set('fieldImages', {'Title': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHWirogunanJlAbimanyu_13.set('fieldImages', {'No_Sample': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHDrSutomoJlWidayati_14.set('fieldImages', {'No_Sample': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_SAHWirogunanJlTohpati_15.set('fieldImages', {'No_Sample': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Gambar': 'ExternalResource', });
lyr_KotaYogyakarta_1.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'inline label - visible with data', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Sungai_2.set('fieldLabels', {'OBJECTID': 'no label', 'PL': 'no label', 'SUMBER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LEN': 'no label', });
lyr_SAHMuraiMinggiranGgMurai_4.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHMuraiMinggiranGgMangga_5.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHGondokusuman_6.set('fieldLabels', {'No_Sample': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHJlTinalan_7.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - always visible', 'Gambar': 'inline label - visible with data', });
lyr_SAHRW9Prenggan_8.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHKampKranon2023_9.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHGedongtengen_10.set('fieldLabels', {'No_Sample': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHRW12Giwangan_11.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHJlPugeranTimur_12.set('fieldLabels', {'Title': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHWirogunanJlAbimanyu_13.set('fieldLabels', {'No_Sample': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHDrSutomoJlWidayati_14.set('fieldLabels', {'No_Sample': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHWirogunanJlTohpati_15.set('fieldLabels', {'No_Sample': 'inline label - visible with data', 'latitude': 'inline label - visible with data', 'longitude': 'inline label - visible with data', 'Gambar': 'inline label - visible with data', });
lyr_SAHWirogunanJlTohpati_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});