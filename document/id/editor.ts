import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── skill
├── group
└── preset
`;

// miscellaneous

export const translation: Markdown = {
	title: "terjemahan",
	summary: "Konfigurasi untuk menerjemahkan teks dalam game ke dalam bahasa lain.",
	points: ["Mengatur teks yang akan diterjemahkan.", "Konfigurasi bahasa tersedia apabila konfigurasi terjemahan diaktifkan.", "Jika terjemahan dinonaktifkan, informasi yang dijelaskan selama pengembangan akan ditampilkan apa adanya.", "Konfigurasi terjemahan dan pengalihan bahasa tidak dapat dilakukan selama pengembangan pra-publikasi."],
	options: {
		label: "translation",
	},
	children: {
		flag: {
			title: "Aktivasi terjemahan",
			summary: "Konfigurasi mati fungsi terjemahan.",
			points: ["Konfigurasi bahasa tersedia apabila konfigurasi terjemahan diaktifkan.", "Terjemahan tidak diaktifkan selama pengembangan sebelum publikasi. Peralihan antar bahasa akan diaktifkan setelah publikasi.", "Jika terjemahan diaktifkan, sepuluh bahasa yang berbeda akan didukung dan data terjemahan diperlukan untuk semua bahasa. Tidak mungkin hanya mengaktifkan beberapa bahasa saja.", "Ketika pengguna memulai permainan, bahasa yang digunakan dalam pengembangan akan ditampilkan terlebih dahulu. Bahasa tersebut kemudian dapat diubah ke bahasa apa pun.", "Proses penerjemahan memang membosankan, tetapi memungkinkan banyak orang untuk memainkannya."],
		},
		file: {
			title: "file bahasa",
			summary: "File JSON dari data terjemahan.",
			points: ["Ketika data game dikeluarkan dengan konfigurasi publik, sebuah file JSON untuk terjemahan dibuat di `translations/world` dalam folder keluaran.", "File JSON untuk terjemahan dalam setiap bahasa berada di dalam folder. Konten berisi data yang tidak ada terjemahannya.", "Konten memiliki id di dalam tipe. Selain itu, ada nama dan deskripsi di dalamnya.", "Terjemahan diperlukan untuk dibuat dan disimpan untuk semua nama dan deskripsi."],
		},
		task: {
			title: "Tugas penerjemahan",
			summary: "Mengedit data terjemahan",
			points: ["Semua file terjemahan berisi data dalam bahasa pada saat pengembangan.", "Pekerjaan penerjemahan diperlukan untuk file yang tidak menggunakan bahasa yang digunakan untuk mengembangkannya."],
			children: {
				ai: {
					title: "AI",
					summary: "Terjemahan berbasis AI",
					points: ["Menerjemahkan menggunakan AI seperti ChatGPT, Copilot, dan Claude.", "Mungkin menerjemahkan sekaligus dan pada tingkat kualitas tertentu.", "Terjemahan ini mungkin tidak ada terjemahan yang sempurna, terutama untuk istilah teknis dan kata benda yang tepat.", "Tergantung pada volume terjemahan, penggunaan AI dapat menjadi mahal.", "Jika kemajuan terjemahan oleh AI terputus di tengah-tengah proses, Anda dapat memberi tahu AI untuk 'melanjutkan' dan AI dapat melanjutkannya. (Dalam beberapa kasus, hal ini mungkin tidak ada manfaatnya)"],
					children: {
						prompt: {
							title: "Contoh petunjuk",
							summary: "Contoh instruksi penerjemahan yang diberikan kepada AI",
							points: ["Contoh perintah: Terjemahkan nilai `name` dan `explanation` pada data JSON yang diunggah dari bahasa Inggris ke bahasa Jepang. Jangan ubah bagian lainnya."],
						},
						gpt: {
							title: "Penggunaan GPT",
							summary: "Terjemahan menggunakan GPT ChatGPT.",
							points: ["Penerjemah Bahasa JSON yang disediakan dalam pustaka GPT yang disediakan oleh ChatGPT dapat digunakan untuk menerjemahkan JSON dengan mudah.", "Struktur JSON dipertahankan dalam terjemahan.", "Fungsi serupa mungkin ditawarkan oleh layanan AI selain ChatGPT."],
						},
					},
				},
				online: {
					title: "layanan terjemahan",
					summary: "Menggunakan layanan terjemahan",
					points: ["Menerjemahkan menggunakan layanan nyala seperti DeepL dan Google Translate.", "Kualitas terjemahan yang lebih tinggi dapat diharapkan daripada terjemahan AI, tetapi ada biaya yang dikenakan tergantung pada volume terjemahan", "File JSON tidak ada yang dapat diterjemahkan secara langsung oleh layanan penerjemahan, sehingga diperlukan sebuah program untuk dibuat dan digunakan.", "Dengan biaya tertentu, ada beberapa layanan yang menerjemahkan data JSON apa adanya. (misalnya doctranslator.com)"],
				},
				manual: {
					title: "manual (pengoperasian)",
					summary: "Terjemahan manual",
					points: ["Buka file terjemahan di editor teks dan masukkan konten terjemahan dalam setiap bahasa. Hal ini sangat memakan waktu, tetapi mungkin bagi Anda untuk menerjemahkan file persis seperti yang Anda inginkan."],
				},
			},
		},
		code: {
			title: "kode bahasa",
			summary: "Daftar kode bahasa yang didukung",
			list: [
				["kode bahasa", "bahasa"],
				["en", "Inggris"],
				["zh", "Bahasa Mandarin (bahasa)"],
				["es", "Spanyol"],
				["ar", "Bahasa Arab (bahasa)"],
				["pt", "Portugis"],
				["Hai.", "Bahasa Hindi"],
				["fr", "Prancis"],
				["ru", "Rusia"],
				["de", "Jerman"],
				["EN", "Jepang"],
			],
		},
	},
};

export const miscellaneous: Markdown = {
	title: "informasi tambahan",
	summary: "Informasi tambahan lain yang dijelaskan.",
	points: ["Informasi referensi."],
	list: expandList("suplemen", [translation], "Deskripsi"),
	options: {
		label: "miscellaneous",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "properti",
	summary: "Konfigurasi efek yang dimiliki Item.",
	points: ["Ini adalah item efek yang dapat dikonfigurasi pada item.", "Item dengan tipe peralatan `necessary` atau `consumable` hanya berefek selama dikenakan. `unnecessary` berefek cukup dengan dimiliki, dan besar efeknya sebanding dengan jumlah yang dimiliki (dua kali lipat jika memiliki 2).", "Karena efek `unnecessary` menggunakan jumlah yang dimiliki sebagai faktor pengganda, maka `maximum` (jumlah maksimum yang dimiliki) menjadi batas atas efek tersebut. Saat menyesuaikan keseimbangan, harap lakukan konfigurasi nilai ini bersamaan dengan `maximum`.", "Nilai untuk kedua item dihitung sebagai penyesuaian untuk perbedaan level antara level pemain dan level Aksi.", "Misalnya, jika nilai serangan adalah 10, serangan dihitung seolah-olah level pemain 10 lebih tinggi dari level Aksi. Nilai minus adalah kebalikannya.", "attack, defence, accuracy, evasion, dan restore hanya berlaku untuk aksi bertipe `stamina`."],
	list: [
		["properti", "Rincian efektivitas."],
		["kecepatan", "Mengurangi waktu yang diperlukan untuk suatu aksi. Waktu yang diperlukan bervariasi secara terbalik dengan perbedaan level (efek rasio hanya setengah)."],
		["kesempatan", "Mengubah probabilitas sukses suatu aksi. Rasio dikenakan pada perbandingan antara sukses dan gagal, sehingga tidak pernah melebihi `100`%."],
		["pengalaman", "Mengubah pengalaman akuisisi. Meningkat secara proporsional dengan perbedaan level (perhitungannya terbalik: semakin tinggi Aksi level, semakin banyak yang Anda peroleh)."],
		["serangan", "Mengubah kerusakan stamina yang diberikan kepada lawan. (Hanya Aksi Stamina)."],
		["pertahanan", "Mengurangi kerusakan stamina yang diterima dari lawan (efek rasio hanya setengah). (hanya aksi stamina)"],
		["akurasi", "Mengurangi tingkat serangan yang meleset. (hanya aksi stamina)."],
		["penghindaran", "Mengubah tingkat penghindaran serangan lawan (efek rasio hanya setengah). (hanya aksi stamina)"],
		["mengembalikan", "Mengubah jumlah stamina yang dipulihkan di akhir aksi. Semakin mendekati pemulihan penuh, semakin landai kenaikannya. (hanya untuk aksi stamina)"],
	],
	children: {
		category: {
			title: "カテゴリ",
			summary: "プロパティを適用するカテゴリの指定",
			points: ["このプロパティを適用するカテゴリのIDを設定します。", "`*`を設定すると全カテゴリに適用されます。", "空欄の場合はアイテムが属するカテゴリに適用されます。"],
		},
		attack: {
			title: "Nilai serangan [perbedaan level].",
			summary: "Koreksi kerusakan stamina yang ditimbulkan pada lawan (hanya berlaku untuk aksi stamina).",
			points: ["Kerusakan serangan dihitung dengan asumsi level pemain jauh lebih tinggi dari level Aksi."],
		},
		defence: {
			title: "Nilai pertahanan [perbedaan level].",
			summary: "Koreksi kerusakan stamina yang diterima dari lawan (hanya berlaku untuk aksi STAMINA).",
			points: ["Kerusakan yang diderita dihitung seolah-olah level pemain adalah nilai yang lebih tinggi dari level Aksi. Semakin tinggi nilaiya, semakin sedikit kerusakan yang ditimbulkan."],
		},
		accuracy: {
			title: "Nilai akurasi [perbedaan level].",
			summary: "Koreksi untuk tingkat melesetnya serangan (hanya berlaku untuk aksi stamina).",
			points: ["Tingkat meleset dihitung dengan asumsi bahwa level pemain adalah nilai ini lebih tinggi dari level Aksi. Semakin tinggi nilaiya, semakin bawah tingkat kesalahan."],
		},
		evasion: {
			title: "Nilai penghindaran [perbedaan level].",
			summary: "Koreksi tingkat penghindaran serangan lawan (hanya berlaku untuk aksi stamina).",
			points: ["Level penghindaran dihitung dengan menganggap level pemain lebih tinggi dari level Aksi sebesar nilai ini. Semakin tinggi nilainya, semakin mudah untuk menghindari serangan lawan."],
		},
		restore: {
			title: "Nilai pemulihan [perbedaan level].",
			summary: "Koreksi untuk pemulihan stamina (hanya berlaku untuk tindakan STAMINA).",
			points: ["Jumlah pemulihan stamina dihitung dengan asumsi bahwa level pemain jauh lebih tinggi daripada level Aksi."],
		},
		speed: {
			title: "Kecepatan [perbedaan level].",
			summary: "Koreksi terhadap waktu aksi",
			points: ["Waktu yang dibutuhkan dihitung dengan asumsi bahwa level pemain adalah nilai ini lebih tinggi dari level Aksi. Semakin tinggi nilaiya, semakin pendek waktu yang dibutuhkan."],
		},
		chance: {
			title: "Probabilitas sukses [perbedaan level].",
			summary: "Koreksi terhadap probabilitas keberhasilan aksi.",
			points: ["Probabilitas sukses tindakan dihitung dengan asumsi bahwa level pemain adalah nilai ini lebih tinggi dari level aksi. Semakin tinggi nilainya, semakin tinggi probabilitas suksesnya."],
		},
		experience: {
			title: "Pengalaman [perbedaan level].",
			summary: "Koreksi terhadap pengalaman akuisisi",
			points: ["Pengalaman dihitung seolah-olah level pemain jauh lebih rendah daripada level Aksi (semakin tinggi level Aksi, semakin banyak pengalaman yang diperoleh, karena perhitungannya terbalik)."],
		},
	},
	options: {
		label: "property",
	},
};

export const combat: Type.Combat = {
	title: "nilai tempur",
	summary: "Nilai koreksi tempur untuk tipe aksi stamina.",
	points: ["Nilai koreksi ini hanya berlaku untuk aksi bertipe `stamina`.", "Setiap nilai dihitung sebagai koreksi tambahan untuk perbedaan level antara pemain dan Aksi.", "Misalnya, jika nilai serangan adalah 10, kerusakan serangan dihitung seolah-olah level pemain 10 lebih tinggi dari level Aksi. Jika minus, koreksinya berlawanan arah.", "Jika diatur pada `defaultCombat` di bagian Umum, nilai ini menjadi parameter pertarungan bawaan untuk seluruh dunia."],
	children: {
		attack: {
			title: "Nilai serangan [perbedaan level].",
			summary: "Koreksi perbedaan level untuk kerusakan stamina yang ditimbulkan pada lawan.",
			points: ["Semakin tinggi nilaiya, semakin banyak kerusakan yang ditimbulkan."],
		},
		defence: {
			title: "Nilai pertahanan [perbedaan level].",
			summary: "Koreksi perbedaan level untuk kerusakan stamina yang diterima dari lawan.",
			points: ["Semakin tinggi nilaiya, semakin banyak kerusakan yang berkurang."],
		},
		accuracy: {
			title: "Nilai akurasi [perbedaan level].",
			summary: "Koreksi perbedaan level untuk tingkat kesalahan serangan.",
			points: ["Semakin tinggi nilaiya, semakin bawah tingkat kesalahan."],
		},
		evasion: {
			title: "Nilai penghindaran [perbedaan level].",
			summary: "Koreksi perbedaan level terhadap tingkat penghindaran serangan lawan.",
			points: ["Semakin tinggi nilaiya, semakin mudah dilakukan penghindaran terhadap serangan lawan."],
		},
		restore: {
			title: "Nilai pemulihan [perbedaan level].",
			summary: "Koreksi perbedaan level untuk pulihkan stamina.",
			points: ["Semakin tinggi nilainya, semakin banyak stamina yang dipulihkan.", "Jika diatur di sisi lawan (nilai tempur Aksi dan skill lawan), efeknya berbalik dan jumlah pemulihan pemain berkurang sebesar nilai tersebut."],
		},
	},
	options: {
		label: "combat",
	},
};

export const acquisition: Type.Acquisition = {
	title: "akuisisi",
	summary: "アイテムやカテゴリレベルの取得設定",
	points: ["Konfigurasi akuisisi.", "アイテムの他にカテゴリのレベル、アクションの実行した回数を変更できます。", "Probabilitas untuk mendapatkan produk dapat dikonfigurasi."],
	list: [
		["Tipe", "Apa yang Anda akuisisi."],
		["カテゴリ", "level"],
		["Aksi", "Hitung dieksekusi."],
		["Item", "hitung jumlah harta benda"],
	],
	children: {
		type: {
			title: "Tipe",
			summary: "Jenis elemen yang akan diperoleh.",
			list: [
				["Tipe", "Apa yang diperoleh dalam akuisisi."],
				["カテゴリ", "Level (konversi pengalaman ditambahkan)"],
				["Aksi", "Hitung dieksekusi."],
				["Item", "hitung jumlah harta benda"],
			],
		},
		id: {
			title: "ID elemen",
			summary: "ID yang mengidentifikasi elemen yang akan diakuisisi.",
		},
		count: {
			title: "nilai",
			summary: "Nilai yang akan diperoleh",
			points: ["Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.", "Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.", "タイプがカテゴリの場合、設定した値がレベルに直接加算されます（1で1レベル、0.5で0.5レベル）。アクションの経験値設定で調整するのが通常の方法です。特殊な目的がない限りこの設定は不要です。"],
		},
		chance: {
			title: "Probabilitas [-1 hingga 1]",
			summary: "Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)",
			points: ["Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.", "Jika nilainya positif, penilaian hanya dilakukan saat aksi berhasil: dengan `1` pasti diperoleh, dan dengan `0.5` diperoleh dengan peluang 50%.", "Jika nilainya negatif, penilaian hanya dilakukan saat aksi gagal: dengan `-1` pasti diperoleh, dan dengan `-0.5` diperoleh dengan peluang 50%.", "Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.", "Nilai defaultnya adalah `1` (pasti diperoleh jika sukses)."],
		},
	},
	links: { type: "type" },
	options: {
		label: "acquisition",
	},
};

export const requirement: Type.Requirement = {
	title: "syarat dan ketentuan",
	summary: "Konfigurasi syarat untuk penggunaan dan tampilan elemen.",
	points: ["カテゴリ、アクション、アイテムごとの各要素に設定する条件です。", "Jika semua konfigurasi tidak ada, operasi yang ditunjukkan dalam tabel tidak dapat dilakukan.", "Jika fungsi kunci terkunci, elemen itu sendiri akan disembunyikan sampai kondisi terpenuhi."],
	list: [
		["Di mana harus melakukan konfigurasi", "Apa yang tidak ada kecuali jika syarat-syaratnya terpenuhi."],
		["カテゴリ", "カテゴリ内の全てのアクションの実行とアイテムの操作"],
		["Aksi", "Pelaksanaan aksi"],
		["Item", "Manipulasi item (misalnya Peralatan)"],
	],
	children: {
		type: {
			title: "Tipe",
			summary: "Jenis elemen yang direferensikan sebagai kondisi.",
			list: [
				["Tipe", "Nilai yang direferensikan"],
				["カテゴリ", "カテゴリのレベル"],
				["Aksi", "Hitung berapa kali aksi telah dilakukan."],
				["Item", "Jumlah item yang dimiliki."],
			],
		},
		id: {
			title: "ID elemen",
			summary: "ID elemen yang disebut sebagai kondisi.",
		},
		count: {
			title: "nilai",
			summary: "Nilai numerik persyaratan.",
			points: ["Kondisi ini terpenuhi jika nilainya lebih besar atau sama dengan nilai yang ditentukan."],
		},
		chance: {
			title: "Probabilitas konsumsi [0-1].",
			summary: "Probabilitas sebuah item dikonsumsi (0-1, hanya berlaku jika tipe-nya adalah item).",
			points: ["Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.", "Dengan `1` selalu dikonsumsi, dengan `0.5` dikonsumsi dengan peluang 50%, dan dengan `0` tidak dikonsumsi.", "Nilai bawaannya adalah `1` (selalu dikonsumsi).", "Tidak valid jika tipenya selain Item."],
		},
		equipment: {
			title: "Peralatan",
			summary: "Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau",
			points: ["Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.", "Tidak valid jika tipenya selain Item."],
		},
	},
	links: { type: "type" },
	options: {
		label: "requirement",
	},
};

export const information: Type.Information = {
	title: "informasi",
	summary: "Lakukan konfigurasi untuk menetapkan informasi dasar tentang elemen (ID, nama, ikon, warna, dll.)",
	points: ["ワールド内の各要素（カテゴリ、アクション、アイテム、イベントなど）に共通する基本情報の項目です。", "Setiap elemen memiliki konfigurasi yang terpisah."],
	children: {
		id: {
			title: "ID",
			summary: "ID unik untuk mengidentifikasi elemen",
			points: ["ID untuk mengidentifikasi setiap elemen secara unik.", "Di editor, ini adalah string untuk mengidentifikasi elemen.", "Misalnya, ID menentukan Item mana yang diperoleh ketika Aksi selesai."],
			important: "Setelah ID dikonfigurasi, tidak ada yang mengubah ID tersebut setelah game didistribusikan. Mengubahnya akan mengakibatkan ketidakkonsistenan dengan data game yang ada dan game tidak akan berfungsi dengan baik.",
			children: {
				displayName: {
					title: "Nama yang ditampilkan.",
					summary: "Nama tampilan dibuat secara otomatis dari ID",
					points: ["Karakter yang dapat digunakan adalah kombinasi huruf, tanda hubung dan hitung.", "Jika nama belum ditetapkan, huruf pertama dari setiap kata menggunakan huruf besar dan tanda hubung diganti dengan spasi, yang secara otomatis dikonfigurasi dalam nama.", "Untuk bahasa selain bahasa Inggris, konfigurasi entri nama diperlukan secara individual."],
					children: {
						example: {
							title: "Contoh.",
							summary: "Contoh kehidupan nyata dari konversi ID",
							points: ["Jika ID-nya `stylish-strong-axe`, maka namanya menjadi `Stylish Strong Axe`."],
						},
					},
				},
				noDuplicate: {
					title: "Terdapat tidak ada duplikasi.",
					summary: "Larangan duplikasi ID dalam tipe yang sama.",
					points: ["要素の判別に用いられるため、カテゴリ、アクション、アイテム、イベント、プリセットの各タイプ内で重複しないでください。", "Memiliki ID yang sama untuk tipe yang berbeda tidak menjadi masalah."],
					links: { type: "type" },
				},
			},
		},
		name: {
			title: "Nama.",
			summary: "Nama elemen seperti yang terlihat",
			points: ["Nama elemen yang ditampilkan dalam permainan.", "Bahasa selain Inggris juga dapat dimasukkan.", "Nama yang menduplikasi elemen lain dapat diterima.", "Jika terlalu panjang, bagian yang meluap akan disingkat dengan `…` pada tampilan selama permainan."],
			children: {
				translateFromId: {
					title: "Konversi otomatis dari ID",
					summary: "Pembuatan nama otomatis dari ID",
					points: ["Jika bidang ini dibiarkan kosong, informasi akan ditampilkan secara otomatis berdasarkan ID. Untuk informasi lebih lanjut, lihat bagian sebelumnya."],
				},
			},
		},
		explanation: {
			title: "catatan penjelasan",
			summary: "Deskripsi elemen terperinci.",
			points: ["Deskripsi elemen yang ditampilkan dalam permainan.", "Bahasa selain bahasa Inggris dapat dimasukkan. Semua teks, bahkan teks yang panjang sekalipun, akan ditampilkan.", "Jika tidak ada penjelasan yang diberikan, biarkan kosong."],
		},
		icon: {
			title: "ikon",
			summary: "Menetapkan ikon untuk mewakili elemen.",
			points: ["Ikon dapat dikonfigurasi sebagai gambar, Iconify atau emoji.", "Iconify adalah layanan yang menawarkan berbagai macam ikon.", "Jika lebih dari hitung yang dikonfigurasi, gambar, Ikonify, dan piktogram akan diprioritaskan dan ditampilkan dalam urutan tersebut."],
			children: {
				image: {
					title: "Gambar.",
					summary: "Gunakan file gambar apa saja",
					points: ["Gambar yang mewakili elemen.", "Jika ukuran file besar, maka ukuran file akan diubah secara otomatis.", "Tidak perlu jika Iconify atau piktogram konfigurasi."],
					children: {
						"file-type": {
							title: "Jenis berkas",
							summary: "Format berkas gambar yang didukung",
							points: ["Format umum yang dapat ditampilkan peramban bisa digunakan.", "JPEG, PNG, GIF, WebP, SVG, dan lainnya."],
						},
					},
				},
				iconify: {
					title: "Iconify",
					summary: "Menggunakan set ikon Iconify",
					points: ["Ikon yang mewakili elemen.", "Iconify adalah layanan yang menawarkan berbagai macam ikon.", "Jika gambar sudah dalam konfigurasi, maka gambar tersebut akan didahulukan."],
					children: {
						iconify: {
							title: "Iconify",
							summary: "Cara memilih ikon dari Iconify",
							points: ["Cari ikon yang dapat ditampilkan di `Iconify`.", "Anda dapat dengan cepat menemukan ikon terbaik dengan mencari ikon.", "Pilih ikon untuk melihat pengenalnya (set ikon ketik `:` nama ikon), seperti `game-icons:sword-wound`, dan tempelkan langsung ke dalam bidang ikon ini."],
							images: ["iconify-selection.png"],
							links: { iconify: "https://icon-sets.iconify.design" },
						},
					},
				},
				emoji: {
					title: "piktograf",
					summary: "Tampilan ikon dengan piktogram",
					points: ["Menampilkan piktogram sebagai ikon.", "Ini dapat dikonversi dari teks ke piktogram dan dikonfigurasi dengan cepat.", "Untuk piktogram, masukkan piktogram Unicode apa adanya.", "Karena piktogram yang diperkenalkan dalam lingkungan eksekusi digunakan, maka piktogram ini ditampilkan sedikit berbeda untuk pengguna yang berbeda.", "Iconify memungkinkan Anda untuk konfigurasi emoji yang tidak ada pada setiap lingkungan", "Karakter non-pikografi dapat ditampilkan, tetapi tampilan mungkin rusak jika ada hitung karakter.", "Masukkan piktogram, misalnya, `🗡️` atau `⚔️`."],
				},
			},
		},
		color: {
			title: "Warna",
			summary: "Konfigurasi warna tampilan elemen.",
			points: ["Sebagai warna elemen, warna ini diterapkan ke ikon elemen dan warna latar belakang.", "Pilih dari pemilih warna editor."],
			children: {
				"heritage-from-parent": {
					title: "Pewarisan dari elemen induk",
					summary: "Mengikuti warna yang diatur pada elemen induk",
					points: ["Jika dikosongkan, warna yang diatur pada elemen induk akan diwarisi.", "Hierarki tipe setiap elemen adalah sebagai berikut.", "例えば、アクションに個別の色が設定されている場合はそれが利用されますが、アクションに個別の色が設定されていない場合はカテゴリ又はワールドの色が使用されます。", "イベントもカテゴリを設定している場合は、アクションやアイテムと同じようにそのカテゴリの色を引き継ぎます。"],
					quote: typeTree,
					links: { type: "type" },
				},
			},
		},
	},
	options: {
		label: "information",
	},
};

export const component: Markdown = {
	title: "komponen",
	summary: "Bagian umum",
	points: ["Komponen umum yang digunakan di setiap konfigurasi lokasi diekstraksi dan ditangani.", "Komponen yang digunakan dalam semua area ini adalah umum, tetapi sebagian komponen tidak ada pada sebagian item."],
	list: expandList("komponen", [information, requirement, acquisition, combat, property], "Deskripsi"),
	options: {
		label: "component",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "preset",
	summary: "Menyesuaikan tampilan elemen sistem",
	points: ["Mengganti teks dan ikon UI yang sudah terintegrasi ke dalam mesin game (pemain).", "Hanya yang cocok dengan preset yang ada berdasarkan ID yang akan diganti.", "Hanya item yang telah Anda konfigurasi yang akan diganti. Contohnya, jika hanya ikon yang dilakukan konfigurasi, item lain seperti nama dan warna akan menggunakan yang asli.", "Penggantian nama dan deskripsi akan diprioritaskan daripada terjemahan dalam setiap bahasa yang sudah ada di dalam game untuk pemain. Teks yang diganti akan ditampilkan apa adanya di semua bahasa.", "Jika Anda ingin mengubah teks untuk setiap bahasa, aktifkan fitur terjemahan dan tentukan dalam berkas terjemahan `translations/world` yang dihasilkan. Berkas tersebut akan menjadi prioritas utama."],
	options: {
		label: "preset",
	},
};

export const task: Type.Event = {
	title: "Tugas",
	summary: "Misi yang akan dianggap berhasil jika syarat-syaratnya terpenuhi",
	points: ["Jika memenuhi konfigurasi yang telah ditetapkan, maka target tercapai, dan pesan akan ditampilkan di bagian atas layar.", "プレイヤーのミッションの一覧と、カテゴリのタスクの一覧に表示されます。", "Hadiah tidak diberikan secara otomatis. Pemain akan menerimanya saat membuka tugas dan menekan tombol \"Akuisisi\".", "Sampai imbalan tersebut diterima, bilah pada daftar akan ditandai dengan pita untuk menunjukkan bahwa imbalan tersebut belum diterima.", "獲得でカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "初回起動時やゲームオーバー時など、条件以外のタイミングで発動させたいものは固定イベント（unique）で設定します。"],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "タスクが所属するカテゴリのID",
			points: ["このタスクを所属させるカテゴリのIDを指定します。", "設定すると、プレイヤーのカテゴリの画面にタスクの一覧が追加され、ミッションの一覧でもカテゴリごとにまとめて表示されます。", "空欄の場合はどのカテゴリにも属さず、ミッションの一覧の先頭にまとめて表示されます。"],
		},
		timing: {
			title: "waktu",
			summary: "タスク発動のタイミング（`tasked`固定）",
			points: ["タスクは`tasked`（設定した条件を満たした時）で固定されており、編集できません。", "Hadiah hanya dapat diterima satu kali, dan setelah diterima, status pencapaiannya tidak akan berubah lagi.", "それ以外の決まったタイミングで発動させたいものは、固定イベント（unique）で設定します。"],
			links: { unique: "unique" },
		},
		unlocked: {
			title: "Tampilan awal",
			summary: "Status tampilan awal ikon tugas (penyelesaian ditentukan oleh kondisi, dan dengan konfigurasi ini, tugas tidak akan dianggap selesai)",
			points: ["タスクの達成条件はrequirementsで決まり、この項目は一覧アイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでタスクの一覧に一切表示されません（達成自体は条件で起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。", "一度達成したタスクは一覧から消えず、その後に条件を満たさなくなっても達成のまま表示されます。"],
		},
		requirements: {
			title: "syarat dan ketentuan",
			summary: "Syarat penyelesaian tugas",
			points: ["タスクを達成させる条件です。", "この条件を満たすと達成になり、報酬を受け取れるようになります。", "一度達成すると、その後に条件を満たさなくなっても達成のままで、報酬もいつでも受け取れます。", "条件を設定していないタスクは達成しません。", "requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。"],
			children: requirement.children,
		},
		requiringGroup: {
			title: "Agregasi grup",
			summary: "Memperlakukan id kondisi sebagai ID grup dan menilai berdasarkan total anggotanya",
			points: ["Saat diaktifkan, id yang ditetapkan pada kondisi (requirements) diperlakukan sebagai ID grup dari pengaturan dasar.", "Kondisi dengan Type Kategori dinilai berdasarkan total Level semua Kategori yang termasuk dalam grup tersebut.", "Kondisi dengan Type Aksi dinilai berdasarkan total jumlah eksekusi semua Aksi yang termasuk dalam grup tersebut.", "Kondisi dengan Type Item dinilai berdasarkan total jumlah kepemilikan semua Item yang termasuk dalam grup tersebut.", "Elemen yang terkunci (selain released) tidak termasuk dalam total.", "Probabilitas konsumsi Item (chance) dan syarat peralatan (equipment) diabaikan, dan tidak ada yang dikonsumsi. Hanya digunakan untuk penilaian.", "Saat dinonaktifkan, id pada kondisi diperlakukan seperti sebelumnya, sebagai ID Kategori, Aksi, atau Item individual."],
		},
		acquisitions: {
			title: "hadiah",
			summary: "Konfigurasi Hadiah Saat Tugas Selesai",
			points: ["達成したタスクを開き、獲得のバーを押した時に受け取れる報酬です。", "カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。", "報酬を設定していないタスクは獲得のバーが出ず、達成した時点で完了になります。", "持てるアイテムの種類が上限に達している時は受け取れません。整理してから受け取り直します。"],
			children: acquisition.children,
		},
		group: {
			title: "kelompok tugas",
			summary: "Klasifikasi kelompok tampilan tugas",
			points: ["Terapkan salah satu grup yang konfigurasi di Basic.", "Daftar tugas akan ditampilkan sesuai urutan konfigurasi grup yang telah ditetapkan.", "カテゴリの中でさらにグループごとに分けて表示されます。", "Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat."],
			links: { general: "general" },
		},
	},
	options: {
		label: "task",
	},
};

// 構造はtaskと同じで、timingだけchanged固定。プレイヤーの画面には一切表示されない内部処理用のイベント
export const changed: Type.Event = {
	title: "変化イベント",
	summary: "カテゴリ・アクション・アイテムの数量が一度に条件量以上増えた時に発動する内部処理用イベント",
	points: [
		"アクションの完了、購入・売却、宝箱の開封など、数量が変化するあらゆるタイミングでチェックされます。",
		"条件（requirements）は所持数などの絶対値ではなく、そのタイミング1回分の増加量で判定します。複数回に分けた小さな増加は合算されません。",
		"複数の条件を設定した場合、その1回の変化ですべての条件を同時に満たす必要があります。",
		"条件を満たすたびに報酬を受け取り、何度でも繰り返し発動します。タスクと違って一度きりではありません。",
		"プレイヤーの画面には一切表示されません。ミッションの一覧にも出ず、達成のメッセージも出ません。",
	],
	links: { unique: "unique" },
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "変化イベントが所属するカテゴリのID（画面に表示されないため分類のみに使われます）",
			points: ["プレイヤーの画面には表示されないため、この設定は見た目に影響しません。"],
		},
		timing: {
			title: "タイミング",
			summary: "変化イベント発動のタイミング（`changed`固定）",
			points: ["`changed`で固定されており、編集できません。", "数量が変化するあらゆるタイミングでチェックされ、条件を満たすたびに繰り返し発動します。"],
		},
		unlocked: {
			title: "初期表示状態",
			summary: "画面に表示されないため実質的に影響しません",
			points: ["変化イベントはプレイヤーの画面に表示されないため、この設定は使われません。"],
		},
		requirements: {
			title: "条件",
			summary: "変化イベント発動の条件（数量の増加量で判定）",
			points: [
				"設定した数だけ、そのタイミング1回で増えていれば条件を満たします。所持数などの絶対値は見ません。",
				"例えばアイテムの条件を3に設定した場合、その1回でそのアイテムが3個以上増えていれば満たされます。",
				"減少は増加条件には数えません。",
				"複数の条件を設定した場合、その1回の変化ですべてを同時に満たす必要があります。",
				"条件を設定していない変化イベントは発動しません。",
				"requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。",
			],
			children: requirement.children,
		},
		requiringGroup: {
			title: "グループ集計",
			summary: "条件のidをグループIDとして扱い、所属する要素の増加量の合計で判定する",
			points: ["有効にすると、条件（requirements）に設定したidは基本設定のグループのIDとして扱われます。", "そのグループに属する全カテゴリ・全アクション・全アイテムの増加量を合計して判定します。", "無効の場合は今まで通り、条件のidは個別のカテゴリ・アクション・アイテムのIDとして扱われます。"],
		},
		acquisitions: {
			title: "報酬",
			summary: "変化イベント発動時の報酬設定",
			points: ["条件を満たすたびに自動で受け取ります。プレイヤーの操作は不要です。", "カテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "数量にマイナスを設定することもできます。"],
			children: acquisition.children,
		},
		group: {
			title: "変化イベントグループ",
			summary: "内部管理用の表示グループ分類（画面に表示されないため実質未使用）",
			points: ["変化イベントはプレイヤーの画面に表示されないため、この設定は見た目に影響しません。"],
		},
	},
	options: {
		label: "changed",
	},
};

export const group: Type.Information = {
	...information,
	title: "kelompok (usu. orang)",
	summary: "カテゴリ、アクション、アイテムの表示グループを定義",
	points: ["Tentukan grup untuk mengontrol urutan tampilan.", "各カテゴリ、アクション、アイテムでここで定義したグループを設定できます。", "Grup dengan kelompok yang sama ditampilkan berdekatan.", "Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat."],
	options: {
		label: "group",
	},
};

export const skill: Type.Skill = {
	title: "Skill",
	summary: "Akan ditulis",
	points: ["Akan ditulis"],
	children: {
		information: information,
		chance: {
			title: "Probabilitas aktivasi [0-1]",
			summary: "Akan ditulis",
			points: ["Akan ditulis"],
		},
		property: {
			...combat,
			summary: "Nilai tempur yang ditambahkan pada giliran aktivasi",
			points: ["Hanya pada giliran skill ini aktif, nilai tempur ini ditambahkan sebagai koreksi perbedaan level.", "Nilai pemulihan adalah pengecualian: alih-alih berlaku pada giliran itu, nilai-nilai tersebut digabungkan dan diterapkan pada pemulihan setelah hasil ditentukan. Di antara nilai pemulihan skill yang aktif selama Aksi, nilai terbesar ditambahkan ke jumlah pemulihan jika itu skill milik pemain sendiri, dan dikurangkan jika itu skill lawan."],
		},
		comment: {
			title: "Tampilan catatan penjelasan",
			summary: "Apakah catatan penjelasan ditampilkan sebagai notifikasi toast saat aktif",
			points: ["Penanda apakah catatan penjelasan ditampilkan sebagai notifikasi toast saat skill ini aktif.", "Jika aktif, catatan ditampilkan setiap kali skill aktif dengan peluang (100% − peluang aktivasi) ÷ 2. Dengan peluang aktivasi 40%, hasilnya 30%.", "Jika nonaktif, catatan tidak ditampilkan.", "Jika catatan penjelasan kosong, tidak ada yang ditampilkan meskipun opsi ini aktif."],
		},
	},
	options: {
		label: "skill",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Elemen-elemen barang seperti peralatan dan bahan habis pakai",
	points: ["Elemen ini sendiri berkaitan dengan kepemilikan benda-benda seperti peralatan, barang habis pakai, dan barang berharga.", "カテゴリ内で１つのみ装備することもできますが、装備できないようにもできます。", "Ada juga cara hitung untuk menggunakannya."],
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "アイテムが所属するカテゴリのID",
			points: ["このアイテムが所属するカテゴリのIDを指定します。"],
		},
		group: {
			title: "kelompok (usu. orang)",
			summary: "Menampilkan menit kelompok Item",
			points: ["Terapkan salah satu grup yang konfigurasi di Basic.", "Daftar item ditampilkan menurut urutan kelompok yang konfigurasi.", "Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Keadaan pembebasan awal",
			summary: "Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)",
			points: ["secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).", "hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.", "hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.", "released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”)."],
		},
		buyingValue: {
			title: "Nilai pembelian [koin].",
			summary: "Konfigurasi harga beli Item.",
			points: ["Anda tidak dapat membeli Item jika Anda belum pernah memilikinya."],
			list: [
				["nilai", "perawatan"],
				["0", "tidak ada"],
				["Nilai yang lebih besar dari nol.", "Nilai yang bisa Anda beli."],
				["Nilai yang kurang dari nol (misalnya -1)", "Tidak ada (dianggap nol)."],
			],
		},
		sellingValue: {
			title: "Nilai [koin].",
			summary: "Konfigurasi harga jual Item.",
			points: ["Konfigurasi harga jual Item."],
			list: [
				["nilai", "perawatan"],
				["0", "tidak ada"],
				["Nilai yang lebih besar dari nol.", "Jual dengan nilai tersebut."],
				["Nilai yang kurang dari nol (misalnya -1)", "Tingkat diskon konfigurasi umum dikalikan dengan nilai penawaran (jika nilai penawaran nol, maka tidak ada)"],
			],
			links: { general: "general" },
		},
		maximum: {
			title: "Jumlah maksimum yang dimiliki [pcs].",
			summary: "Batasan jumlah maksimum item yang dimiliki.",
			points: ["Jika 0, tidak ada batasan jumlah yang dapat dimiliki.", "Jika lebih dari 1, Anda hanya dapat memiliki hingga jumlah tersebut. Jika batas maksimum telah tercapai, akuisisi lebih lanjut tidak akan menambah jumlah yang dimiliki."],
		},
		equipmentType: {
			title: "Tipe Peralatan",
			summary: "Konfigurasi tipe untuk peralatan, efek, dan konsumsi Item.",
			points: ["装備可能なアイテムは、カテゴリの`equipmentGroups`で指定されたグループに属している必要があります。", "Hanya satu item yang dapat dilengkapi dalam grup yang sama.", "`unnecessary` tetap berefek terlepas dari dikenakan atau tidak, dan besar efeknya sebanding dengan jumlah yang dimiliki (tidak berefek pada 0, n kali lipat pada n)."],
			list: [
				["nilai", "Peralatan", "Efektivitas.", "konsumsi", "Contoh."],
				["`necessary`", "Diperlukan", "Hanya saat melengkapi (1 buah)", "tidak ada", "Pedang, baju besi, dan peralatan lainnya."],
				["`consumable`", "Diperlukan", "Hanya saat melengkapi (1 buah)", "Dikonsumsi saat aksi dilakukan", "Item yang dikonsumsi untuk mendapatkan efek, seperti ramuan."],
				["`unnecessary`", "Tidak perlu", "Selama dibawa, selalu (berbanding lurus dengan jumlah yang dibawa)", "tidak ada", "Item pasif yang efektif hanya dengan memilikinya."],
				["`impossible`", "tidak diperbolehkan", "tidak ada", "tidak ada", "Item-item yang tidak ada seperti material dan puing-puing."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Persyaratan diperlukan untuk penggunaan item." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Properti efek dari item." },
		coinId: { title: "ID Mata Uang yang Diperdagangkan", summary: "ID mata uang yang digunakan untuk jual beli Item ini", points: ["Tentukan ID mata uang (koin) yang digunakan secara umum untuk nilai beli dan nilai jual.", "Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan."] },
		// スキルの実体ではなくワールド直下のskillsのID参照なので、スキル自身の項目は持たせない
		skill: { title: skill.title, summary: "Akan ditulis", points: ["Akan ditulis"], options: { label: "skill" } },
	},
	options: {
		label: "item",
	},
};

export const action: Type.Action = {
	title: "Aksi",
	summary: "Elemen bertindak seperti mengumpulkan, membuat, dan bertarung.",
	points: ["Ini adalah elemen-elemen yang mewakili bertindak seperti mengumpulkan, membuat, membeli dan menjual, dan berkelahi.", "Dengan setiap bertindak yang Anda lakukan, Anda mendapatkan pengalaman dan level Anda meningkat.", "Anda dapat mengatur Item yang akan dikonsumsi atau diperoleh untuk setiap bertindak.", "Ada beberapa jenis pola bertindak."],
	children: {
		information: information,
		category: {
			title: "カテゴリ",
			summary: "アクションが所属するカテゴリのID",
			points: ["このアクションが所属するカテゴリのIDを指定します。"],
		},
		attribute: {
			title: "atribut",
			summary: "アクション固有の属性カテゴリ",
			points: ["個別の属性(カテゴリ)を設定できます。", "空欄の場合は属するカテゴリを引き継ぎます", "例えば、魔王城というカテゴリに属するアクションに個別に魔法という属性を設定した場合、アクション完了時間やダメージには魔法のカテゴリのレベルやプロパティが計算され適応されます。"],
			links: { category: "category" },
		},
		group: {
			title: "kelompok (usu. orang)",
			summary: "Menampilkan menit kelompok aksi",
			points: ["Terapkan salah satu grup yang konfigurasi di Basic.", "Daftar aksi ditampilkan menurut urutan kelompok yang konfigurasi."],
			links: { general: "general" },
		},
		unlocked: {
			title: "Keadaan pembebasan awal",
			summary: "Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)",
			points: ["secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).", "hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.", "hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.", "released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”)."],
		},
		level: {
			title: "level",
			summary: "Level kesulitan Aksi.",
			points: ["Tingkat kesulitan Aksi ditunjukkan oleh level.", "Hitung properti pada saat runtime dibandingkan dengan level pemain.", "Sebagai contoh, melakukan Aksi yang lebih tinggi dari level Anda akan memiliki tingkat sukses dibawah.", "Jika syarat-syarat tersebut terpenuhi, eksekusi dapat dilakukan meskipun level pemain lebih rendah dari nilai ini."],
			links: { property: "property" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Persyaratan yang diperlukan untuk pelaksanaan aksi." },
		seconds: {
			title: "Waktu [detik].",
			summary: "Waktu yang dibutuhkan untuk melakukan aksi",
			points: ["Waktu standar (dalam detik) yang diperlukan untuk melakukan suatu aksi sekali.", "Untuk tipe `stamina`, ini adalah selang waktu satu giliran (stamina masing-masing pihak berkurang satu kali).", "Eksekusi aktual akan bervariasi karena perhitungan properti."],
			links: { property: "property" },
		},
		experience: {
			title: "pengalaman [tingkat level berikutnya di 100]",
			summary: "Pengalaman yang diperoleh dari aksi yang sukses",
			points: ["Pengalaman standar yang diperoleh dari melakukan suatu aksi satu kali dan sukses; 100 setara dengan satu level pengalaman.", "Dalam kasus pertempuran, disarankan untuk menetapkan lebih banyak, karena itu merupakan akuisisi ketika lawan menang.", "Eksekusi aktual akan bervariasi karena perhitungan properti."],
			links: { property: "property" },
		},
		chance: {
			title: "Probabilitas sukses [0-1].",
			summary: "Probabilitas sukses pada penyelesaian aksi",
			points: ["Probabilitas sukses pada saat penyelesaian Aksi.", "Dengan `1` selalu berhasil, dan dengan `0` selalu gagal.", "Jika terjadi kegagalan, item yang dapat dikonsumsi akan habis, tetapi tidak ada hadiah atau pengalaman yang diperoleh.", "Eksekusi aktual akan bervariasi karena perhitungan properti."],
		},
		maximum: {
			title: "Jumlah maksimum lari [kali].",
			summary: "Jumlah maksimum aksi yang dapat diselesaikan.",
			points: ["Jumlah maksimum aksi yang dapat diselesaikan dengan sukses.", "Dengan `0` berarti tanpa batas.", "Ketika batas atas tercapai, aksi tidak lagi dapat dieksekusi."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Hadiah untuk akuisisi Aksi yang sukses." },
		progressType: {
			title: "Jenis Kemajuan",
			summary: "Tipe eksekusi aksi",
			points: ["Ada empat jenis."],
			list: [
				["Tipe", "detail operasi", "stamina", "Contoh."],
				["`persistent`", "Ini adalah tipe aksi yang terus menerus diulang; Anda mendapatkan pengalaman dan hadiah untuk setiap penyelesaian.", "Tidak ada hubungan", "Penebangan, pertambangan, penangkapan ikan"],
				["`single`", "Lakukan satu aksi dalam satu waktu. Jika terputus, kemajuan akan disimpan dan dapat dilanjutkan di lain waktu. Setelah selesai, pengguna menekan aksi konfirmasi untuk menerima hasilnya.", "Tidak ada hubungan", "Membuka peti harta karun, belajar keterampilan melalui membaca"],
				["`snap`", "Tipe aksi ini dilakukan secara instan. Diselesaikan dengan segera tanpa ada jeda waktu.", "Tidak ada hubungan", "berdagang, penggunaan Item."],
				["`stamina`", "Setiap waktu yang dibutuhkan akan mengurangi stamina pemain dan lawan. Ketika stamina lawan habis, pengalaman dan hadiah akan diperoleh. Ketika stamina pemain habis, permainan berakhir dan semua aksi yang sedang berlangsung dibatalkan.", "Relevan.", "Operasi tempur dan berbahaya."],
			],
		},
		property: combat,
		// スキルの実体ではなくワールド直下のskillsのID参照の一覧
		skills: { title: skill.title, summary: "Akan ditulis", points: ["Akan ditulis"], options: { label: "skill", array: true } },
	},
	options: {
		label: "action",
	},
};

export const category: Type.Category = {
	title: "カテゴリ",
	summary: "Kerangka kerja umum untuk menit Aksi dan Item.",
	points: ["Merupakan klasifikasi utama.", "Contohnya, ini bisa dikonfigurasi dalam kerangka berpikir apa pun, seperti jarak dekat, jarak jauh, sihir, ruang bawah tanah, pandai besi, pabrik, dll.", "アクションやアイテムはワールド直下に配置され、カテゴリIDで関連付けられます。"],
	children: {
		information: information,
		group: {
			title: "kelompok (usu. orang)",
			summary: "カテゴリの表示グループ分類",
			points: ["Terapkan salah satu grup yang dilakukan konfigurasi di Basic.", "設定したグループ順にカテゴリ一覧が表示されます。"],
			links: { general: "general" },
		},
		unlocked: {
			title: "Keadaan pembebasan awal",
			summary: "Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)",
			points: ["secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).", "hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.", "hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.", "released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "カテゴリ利用に必要な条件" },
		equipmentGroups: {
			title: "kelompok Peralatan",
			summary: "このカテゴリで装備可能なアイテムグループの指定",
			points: ["このカテゴリで装備できるアイテムのグループ名のリストです。", "Hanya item dari grup yang sesuai dengan nama grup yang ditentukan di sini yang dapat menjadi Peralatan.", "Jika string kosong ditentukan, item dengan konfigurasi grup yang tidak disetel (kosong) menjadi memenuhi syarat untuk Peralatan.", "Hanya satu item yang dapat digunakan sebagai Peralatan dalam grup yang sama. Saat Anda melengkapi item baru, peralatan yang ada dalam grup yang sama secara otomatis dilepas.", "Jika daftar kosong (0 buah), tidak ada peralatan yang dapat digunakan."],
			links: { general: "general" },
		},
		numeric: {
			title: "Ketersediaan level",
			summary: "カテゴリレベル機能の有無",
			points: ["このカテゴリがレベルを持つかどうかのフラグです。", "Jika nyala, berarti ada levelnya; jika mati, berarti tidak ada.", "例として、剣技や魔法といった経験に基づくカテゴリはオンにし、ダンジョンや鍛冶屋といった場所のカテゴリはオフにするなどの使い方があります。"],
		},
		standaloneProgress: {
			title: "kemajuan secara bersamaan",
			summary: "他カテゴリとの並行実行設定",
			points: ["このカテゴリのアクションが、他のカテゴリのアクションと並行して進行できるかどうかのフラグです。", "オンの場合は、他のカテゴリのアクションとは独立して同時に進行できます。", "オフの場合は、同じくオフに設定された他のカテゴリのアクションと同時に実行できません。新たにこのカテゴリのアクションを開始すると、他の非スタンドアロンカテゴリで進行中のアクションは自動的に中止されます。"],
		},
		background: {
			title: "latar belakang",
			summary: "カテゴリ固有の背景設定",
			points: ["このカテゴリの背景を設定します。", "カテゴリを選択されたときに、連動して背景画像が変更されます。", "Jika tidak ada konfigurasi, pengaturan latar belakang dunia digunakan sebagaimana adanya."],
		},
	},
	options: {
		label: "category",
	},
};

export const type: Markdown = {
	title: "Tipe",
	summary: "Klasifikasi dasar dunia",
	points: ["ワールドは6つのタイプで構成されます。", "Semua elemen ditempatkan langsung dibawah dunia.", "アクションとアイテムは所属するカテゴリのIDで関連付けられます。"],
	list: expandList("Tipe", [category, action, item, skill, group, preset], "Deskripsi"),
	quote: typeTree,
	options: {
		label: "type",
		linkedList: true,
	},
};

// basic

export const development: Type.Development = {
	title: "pengembangan",
	summary: "Catatan dan manajemen kesalahan selama pengembangan dunia",
	points: ["Digunakan selama perkembangan dunia.", "Ini menyangkut pengembangan dan pengujian dunia ini dan tidak memengaruhi konten permainan.", "Pemain tidak memeriksa konten mengenai pengembangan."],
	children: {
		version: {
			title: "versi",
			summary: "Nomor versi build editor.",
			points: ["Nomor versi konsol secara otomatis direkam pada saat pembuatan dunia.", "Pengembang tidak dapat mengubah konten ini."],
		},
		memo: {
			title: "Memo.",
			summary: "Catatan memo untuk pengembang",
			points: ["Pengembang bebas untuk menyertakan informasi ini sebagai catatan.", "Tidak relevan dengan publikasi game."],
		},
		errors: {
			title: "kesalahan",
			summary: "Pencatatan kesalahan hasil validasi.",
			points: ["Hasil validasi dunia secara otomatis disimpan di sini.", "Misalnya, kesalahan ditampilkan jika ada jenis karakter yang tidak ada, atau jika nilai yang dimasukkan melebihi batas.", "Pengembang tidak dapat mengubah konten ini.", "Ini mungkin disimpan di server bila tidak ada kesalahan yang disimpan di sini."],
		},
		timestamp: {
			title: "stempel waktu",
			summary: "Catatan penciptaan, pelestarian, dan publikasi.",
			points: ["Waktu pembuatan, penyimpanan, dan publikasi dunia direkam secara otomatis.", "Pengembang tidak dapat mengubah konten ini."],
			children: {
				created: {
					title: "hari",
					summary: "Waktu penciptaan dunia pertama kali",
					points: ["Hari pertama kali diciptakan."],
				},
				saved: {
					title: "simpan hari dan waktu",
					summary: "Waktu eksekusi penyimpanan terakhir",
					points: ["Hari terakhir kali dunia diselamatkan."],
				},
				published: {
					title: "hari publikasi dan waktu",
					summary: "Waktu eksekusi publik terakhir",
					points: ["Dunia terakhir kali diterbitkan pada hari."],
				},
			},
		},
		autosaveing: {
			title: "penghematan otomatis",
			summary: "Mengaktifkan/menonaktifkan fungsi penyimpanan otomatis.",
			points: ["Menunjukkan apakah fungsi penyimpanan otomatis diaktifkan.", "Pengembang tidak dapat mengubah konten ini."],
		},
	},
	options: {
		label: "development",
	},
};

export const design: Type.Design = {
	title: "desain",
	summary: "Konfigurasi tampilan visual seperti warna dunia dan font.",
	points: ["Konfigurasi tentang tampilan dunia.", "Mengenai desain dunia secara keseluruhan, jika ada konfigurasi individual untuk tiap elemen, maka konfigurasi tersebut yang diutamakan."],
	children: {
		barColor: {
			title: "Warna bilah",
			summary: "Warna latar belakang bar",
			points: ["Digunakan sebagai warna latar belakang bar.", "Karena warna ini juga berfungsi sebagai latar belakang bawah layar, warna baris yang sedang dipilih maupun bilah gulir juga dibuat berdasarkan warna ini."],
		},
		textColor: {
			title: "Warna huruf",
			summary: "Warna teks dan latar belakang",
			points: ["Digunakan sebagai warna teks.", "Jika tidak ada konfigurasi untuk gambar latar belakang, gradasi yang didasarkan pada warna ini akan menjadi latar belakangnya.", "Jika perbedaan kecerahan antara latar belakang dan teks dibuat lebih kontras, teks akan lebih mudah dibaca."],
		},
		shadowColor: {
			title: "Warna Bayangan",
			summary: "Warna bayangan di bar",
			points: ["Warna ini digunakan sebagai warna bayangan yang jatuh pada bilah dan header.", "Jika warnanya dibuat lebih gelap daripada warna bilah, bayangannya akan terlihat lebih alami."],
		},
		background: {
			title: "gambar latar belakang",
			summary: "Gambar latar belakang untuk seluruh permainan",
			points: ["Konfigurasi gambar latar belakang game.", "Jika tidak ada konfigurasi gambar, latar belakangnya akan berupa gradasi warna yang didasarkan pada warna teks."],
		},
	},
	options: {
		label: "design",
	},
};

export const general: Type.General = {
	title: "umum",
	summary: "Konfigurasi dasar game, termasuk konfigurasi bahasa dan level",
	children: {
		language: {
			title: "bahasa",
			summary: "Bahasa dunia pada saat penciptaannya.",
			points: ["Konfigurasi bahasa yang digunakan dalam editor dunia ini.", "Bahasa pertama yang ditampilkan saat pengguna memulai permainan."],
		},
		translations: {
			title: "terjemahan",
			summary: "Menyiapkan terjemahan bahasa atau",
			points: ["Jika diaktifkan, pengguna dapat bermain dalam bahasa apa pun.", "Jika dinonaktifkan, Anda hanya dapat memutar dalam bahasa yang dipilih dalam konfigurasi bahasa.", "Jika terjemahan diaktifkan, data terjemahan untuk setiap bahasa diperlukan."],
			links: { translation: "translation" },
		},
		offlineMaxHours: {
			title: "Waktu offline maksimum [jam].",
			summary: "Batas waktu untuk kemajuan mati.",
			points: ["Konfigurasi jumlah waktu maks kemajuan saat mati.", "Misalnya, jika 6 waktu ditetapkan, proses kembali mati hingga 6 waktu akan diproses, tetapi jika waktu atas itu diizinkan, waktu mati akan diperlakukan sebagai 6 waktu.", "Jika 0 waktu ditetapkan, tidak ada proses pemrosesan yang terjadi sama sekali saat kembali mati.", "Nilai maks adalah 24 waktu."],
			links: { category: "category" },
		},
		maxCategoryLevels: {
			title: "カテゴリの最大レベル",
			summary: "各カテゴリのレベル上限",
			points: ["各カテゴリの最大レベルを設定します。", "Jika akuisisi pengalaman terjadi di luar level ini, level maks yang konfigurasi di sini digunakan dalam perhitungan properti.", "レベルのないカテゴリではこの値は関係ありません。"],
			links: { category: "category" },
		},
		locking: {
			title: "fungsi terkunci",
			summary: "Menyembunyikan item sampai persyaratan terpenuhi",
			points: ["有効の場合、カテゴリ・アクション・アイテムは一度も使用・所持したことがなく、かつrequirementsを満たしていない間は非表示になります。", "Jika dinonaktifkan, semua item akan ditampilkan dari awal, tetapi tidak dapat dijalankan atau dilengkapi dengan Peralatan hingga persyaratan terpenuhi."],
			links: { category: "category", action: "action", item: "item" },
		},
		coins: {
			title: "mata uang",
			summary: "Konfigurasi mata uang (koin) yang digunakan dalam game",
			points: [
				"Konfigurasi mata uang yang digunakan dalam game.",
				"Anda dapat mendefinisikan beberapa mata uang, dan masing-masing dapat dikonfigurasi sebagai informasi (ID, nama, ikon, warna, dll.).",
				"Mata uang digunakan untuk membeli dan menjual item, serta untuk memperluas kapasitas inventaris.",
				"Mata uang yang berada di urutan pertama akan diperlakukan sebagai mata uang utama, dan akan digunakan jika ID mata uang (`coinId`) tidak ada untuk Item atau kapasitas.",
			],
			links: { information: "information", item: "item" },
		},
		capacity: {
			title: "kapasitas",
			summary: "Konfigurasi kapasitas inventaris.",
			points: ["Mengontrol jumlah maksimum berbagai jenis item yang dapat dimiliki pemain.", "Setiap item dikendalikan oleh jumlah jenis item yang Anda miliki, tidak ada jumlah item yang Anda miliki.", "Jika `initialCount` diatur ke 0, kapasitasnya menjadi tanpa batas.", "Ketika merujuk pada item kapasitas dalam kondisi atau hadiah, gunakan ID yang ditetapkan dalam konfigurasi di sini."],
			children: {
				information: information,
				initialCount: {
					title: "Nilai default [pcs].",
					summary: "Kapasitas inventaris awal (jumlah item berbeda yang dapat disimpan)",
					points: ["Kapasitas awal (jumlah item berbeda yang dapat dimiliki) mulai permainan.", "Jika diatur ke `0`, kapasitasnya menjadi tanpa batas."],
				},
				initialCost: {
					title: "Harga dasar [koin].",
					summary: "Harga awal untuk satu kapasitas tambahan.",
					points: ["Harga dasar (dalam koin) untuk meningkatkan kapasitas inventaris sebanyak satu slot.", "Harga aktual dihitung sebagai 'harga dasar x persentase kenaikan ^ hitung beli'", "Contoh: harga dasar 100, tingkat kenaikan 1,2, 100 koin pertama, 120 koin kedua, 144 koin ketiga."],
				},
				increasingRate: {
					title: "Persentase peningkatan [kali].",
					summary: "Persentase peningkatan biaya perluasan kapasitas",
					points: ["Ini adalah pengganda untuk berapa banyak biaya ekspansi kapasitas meningkat dengan beli ke-n.", "Dengan `1.0` harganya selalu sama, dan dengan `1.2` harganya naik 20% setiap kali pembelian.", "Rumus: harga dasar x persentase kenaikan ^ jumlah kali beli"],
					list: [
						["tingkat kenaikan", "Penambahan pertama.", "Kenaikan ke-5.", "Kenaikan ke-10.", "Kenaikan ke-100.", "Kenaikan ke-1000."],
						["1.00", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
						["1.05", "x1.00", "x1.22", "x1.63", "x131.50", "x1.7×10²⁰"],
						["1.10", "x1.00", "x1.61", "x2.59", "x1.4 x 10⁴", "x2.7×10⁴¹"],
						["1.20", "x1.00", "x2.49", "x6.19", "x8.3 x 10⁷", "x8.3×10⁷⁹"],
						["1.50", "x1.00", "x5.06", "x57.67", "x1.9×10¹⁷", "x7.0×10¹⁷⁶"],
					],
				},
				coinId: {
					title: "ID Mata Uang",
					summary: "ID mata uang yang digunakan untuk perluasan kapasitas",
					points: ["Tentukan ID mata uang (koin) yang akan digunakan untuk harga perluasan kapasitas inventaris.", "Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan."],
				},
				buyingLimit: {
					title: "Batas beli [kali]",
					summary: "Jumlah maksimum kali beli kuota",
					points: ["Ini adalah batas maksimum jumlah kali yang bisa dibeli untuk membeli kapasitas menggunakan mata uang.", "Jika diatur ke `0`, Anda dapat beli tanpa batas.", "Jika diatur menjadi `-1`, Anda tidak akan bisa membeli.", "Peningkatan kapasitas yang berasal dari imbalan tidak termasuk dalam batas atas ini."],
				},
			},
			links: { item: "item" },
		},
		queue: {
			title: "Antrian",
			summary: "Konfigurasi jumlah slot antrian untuk eksekusi beruntun aksi",
			points: [
				"Mengelola jumlah slot antrian untuk menjalankan aksi secara berurutan.",
				"Antrian mencakup aksi yang sedang berjalan, dan aksi di posisi terdepan adalah yang dijalankan. Jika slotnya `1`, hanya aksi yang sedang berjalan yang muat sehingga tidak ada yang bisa menunggu.",
				"Jumlah slot, sama seperti kapasitas, dapat dibeli menggunakan mata uang, dan Anda juga dapat menambahnya dengan memilih Item dari antrian sebagai hadiah dari Aksi atau acara.",
				"Jika Anda ingin merujuk item dalam antrian berdasarkan kondisi atau imbalan, gunakan ID yang telah dikonfigurasi di sini.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Nilai default [pcs].",
					summary: "Jumlah slot eksekusi berurutan saat permainan mulai",
					points: ["Ini adalah jumlah slot antrian saat permainan dimulai.", "Nilai minimumnya adalah `1` (aksi yang sedang berjalan memakai satu slot, dan tidak ada perlakuan seperti `0` = tak terbatas, seperti pada kapasitas)."],
				},
				initialCost: {
					title: "Harga dasar [koin].",
					summary: "Harga awal untuk menambah satu slot",
					points: ["Ini adalah harga dasar (koin) untuk menambah satu slot eksekusi berurutan.", "Harga aktual dihitung sebagai 'harga dasar x persentase kenaikan ^ hitung beli'", "Contoh: harga dasar 100, tingkat kenaikan 1,2, 100 koin pertama, 120 koin kedua, 144 koin ketiga."],
				},
				increasingRate: {
					title: "Persentase peningkatan [kali].",
					summary: "Tingkat kenaikan biaya perluasan kapasitas",
					points: ["Ini adalah faktor pengali yang menunjukkan seberapa besar kenaikan biaya perluasan kuota saat membeli ke-n kali.", "Dengan `1.0` harganya selalu sama, dan dengan `1.2` harganya naik 20% setiap kali pembelian.", "Rumus: harga dasar x persentase kenaikan ^ jumlah kali beli"],
				},
				coinId: {
					title: "ID Mata Uang",
					summary: "ID mata uang yang digunakan untuk perluasan kuota",
					points: ["Tentukan ID mata uang (koin) yang akan digunakan untuk harga perluasan batas eksekusi beruntun.", "Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan."],
				},
				buyingLimit: {
					title: "Batas beli [kali]",
					summary: "Jumlah maksimum pembelian slot",
					points: ["Ini adalah batas maksimum jumlah kali Anda dapat membeli slot eksekusi beruntun dengan mata uang.", "Jika diatur ke `0`, Anda dapat beli tanpa batas.", "Jika diatur menjadi `-1`, Anda tidak akan bisa membeli.", "Penambahan kuota berdasarkan imbalan tidak termasuk dalam batas maksimum ini."],
				},
			},
			links: { item: "item" },
		},
		levelCommonRatio: {
			title: "Tingkat peningkatan pengalaman [kali].",
			summary: "Persentase peningkatan tingkat kesulitan level.",
			points: ["カテゴリのレベルが上がるにつれて、次のレベルになるのに必要な経験値の上昇率です。", "Meningkatkan nilai ini akan meningkatkan tingkat kesulitan.", "Jumlah pengalaman yang diperlukan untuk naik ke level berikutnya adalah (tingkat kenaikan pengalaman)^(level saat ini - 1)."],
			list: [
				["Tingkat peningkatan pengalaman", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "category" },
		},
		actionLevelLimit: {
			title: "pembatasan level Aksi",
			summary: "Meminta hitung berapa kali aksi atribut yang sama telah dieksekusi untuk eksekusi suatu aksi.",
			points: ["Jika diaktifkan, hitung kali aksi dengan atribut yang sama telah dieksekusi secara otomatis ditambahkan ke kondisi eksekusi setiap tindakan.", "Jumlah hitung yang diperlukan sama dengan nilai level aksi.", "属性が設定されていない場合は、所属するカテゴリのIDが使用されます。"],
		},
		propertyRatio: {
			title: "Rasio properti [kali]",
			summary: "Berapa kali properti berubah setiap 10 perbedaan level",
			points: [
				"Mengatur berapa kali setiap properti berubah setiap kali perbedaan antara level kategori dan level aksi bertambah `10`.",
				"Rasio dihitung sebagai (rasio properti)^(perbedaan level÷10). Ketika perbedaan level adalah `0`, rasionya `1` dan nilai yang diatur pada aksi digunakan apa adanya.",
				"Serangan dan pengalaman bertambah sebesar rasio ini, sedangkan pertahanan (kerusakan yang diterima) dan kecepatan (waktu yang dibutuhkan) berkurang dengan rasio yang sama.",
				"Akurasi, penghindaran, probabilitas sukses, dan pemulihan adalah nilai yang berada dalam rentang `0` hingga `100`%, sehingga rasio dikenakan pada perbandingan antara sisi yang tercapai dan sisi yang tidak tercapai. `0`% dan `100`% tidak berubah, dan nilai di antaranya tidak pernah melebihi `100`%.",
				"Pertahanan, penghindaran, dan kecepatan hanya menerima setengah efek rasio (perbedaan level `20` setara dengan perbedaan level `10` pada properti lain). Pertahanan dan penghindaran bekerja ganda pada tingkat terkena serangan dan kerusakan yang diterima, sedangkan kecepatan bekerja pada semua properti lain sebagai jumlah pelaksanaan, sehingga efeknya dilemahkan agar tetap seimbang.",
				"Patokannya adalah (tingkat kenaikan pengalaman) pangkat `6.7`. Di atas itu, kenaikan level makin cepat seiring naiknya level; di bawah itu, level-level akhir memerlukan lebih banyak waktu.",
				"Jika diatur ke `1`, perbedaan level tidak lagi berpengaruh. Semakin besar nilainya, semakin tajam keuntungan dan kerugian dari perbedaan level.",
			],
			list: [
				["Rasio properti", "Perbedaan level -20", "Perbedaan level -10", "Perbedaan level 0", "Perbedaan level +10", "Perbedaan level +20"],
				["`1`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`", "`x1.00`"],
				["`1.5`", "`x0.44`", "`x0.67`", "`x1.00`", "`x1.50`", "`x2.25`"],
				["`2`", "`x0.25`", "`x0.50`", "`x1.00`", "`x2.00`", "`x4.00`"],
				["`3`", "`x0.11`", "`x0.33`", "`x1.00`", "`x3.00`", "`x9.00`"],
			],
			links: { action: "action", property: "property" },
		},
		defaultCombat: { ...combat, summary: "Parameter tempur default yang umum untuk Aksi.", points: ["Ini adalah nilai koreksi pertarungan dasar yang berlaku sama untuk semua aksi bertipe `stamina`.", "Nilai tempur (properti) dari setiap Aksi ditambahkan ke nilai default ini."], links: { action: "action" } },
	},
	options: {
		label: "general",
	},
};

export const overview: Type.Overview = {
	title: "ringkasan",
	summary: "Informasi dasar tentang dunia dan penulisnya",
	points: ["Bagian ini menjelaskan isi dunia.", "Lakukan konfigurasi agar mudah dipahami oleh pengguna ketika memilih dunia.", "Konfigurasi ini tidak memengaruhi pengoperasian dunia."],
	children: {
		information: information,
		version: {
			title: "versi",
			summary: "Nomor versi dunia",
			points: ["Masukkan nilai apa saja (bilangan bulat atau desimal).", "Umumnya, bagian bilangan bulat mewakili versi mayor dan bagian minoritas mewakili versi minor."],
		},
		author: {
			title: "Nama penulis",
			summary: "Nama penulis dunia",
			points: ["Masukkan pegangan atau nama panggilan Anda."],
		},
		homepage: {
			title: "beranda",
			summary: "URL situs web penulis",
			points: ["Jika Anda memiliki beranda atau situs jejaring sosial Anda sendiri, masukkan URL-nya.", "Pemain dapat memeriksa URL ini melalui tautan.", "Jika tidak ada, biarkan kosong."],
		},
		url: {
			title: "pencari sumber daya yang seragam",
			summary: "URL permainan",
			points: ["Masukkan URL tempat Anda ingin menempatkan game di dunia ini.", "Masukkan URL halaman Atas, seperti index.html, termasuk domainnya.", "Jika URL yang sesuai disediakan, URL tersebut akan beroperasi sebagai PWA.", "PWA adalah fitur yang berfungsi seperti aplikasi yang dapat diinstal dan dimainkan secara mati."],
		},
		estimatedPlayingTime: {
			title: "Perkiraan waktu bermain",
			summary: "Perkiraan waktu untuk menyelesaikan dunia.",
			points: ["Perkiraan waktu bermain yang diperlukan untuk menyelesaikan permainan dunia.", "Pemain dapat memeriksa ini sebagai panduan saat bermain.", "Ini hanyalah waktu referensi dan tidak ada definisi yang jelas tentang apa yang dimaksud dengan kesempurnaan dunia."],
			children: {
				value: {
					title: "nilai",
					summary: "Nilai waktu bermain",
				},
				unit: {
					title: "unit",
					summary: "Satuan waktu (mis. jam, menit)",
				},
			},
		},
	},
	options: {
		label: "overview",
	},
};

// タイミングごとの固定イベント。項目の説明はタスクと共通で、タイミング固有の説明だけ差し替える
const toUniqueEvent = (title: string, summary: string, points: string[], timingPoints: string[]): Type.Event => ({
	title,
	summary,
	points,
	children: {
		...task.children,
		category: {
			title: "カテゴリ",
			summary: "イベントでは使用しません",
			points: ["ミッションやタスクの一覧に表示されないため、所属するカテゴリは指定しません。", "エディターでは入力欄が表示されません。"],
		},
		timing: {
			title: "タイミング",
			summary: "イベントが発動するタイミング（固定）",
			points: timingPoints,
		},
		unlocked: {
			title: "初期表示状態",
			summary: "イベントアイコンの初期表示状態（発火はタイミングで決まり、この設定では発火しません）",
			points: ["イベントの発火条件はタイミングで決まり、この項目はアイコンの見た目のみに影響します。", "secreted: 全requirementsを満たすまでアイコンが表示されません（発火自体はタイミングで起こります）。", "hidden・hinted: アイコンに斜線が付き未解放として表示されます。", "released: 斜線が消え解放済みとして表示されます。"],
		},
		requirements: {
			title: "条件",
			summary: "報酬を獲得する条件",
			points: ["タイミングが成立するとイベントは発動し、専用の画面を開いて内容を表示します。", "報酬は、発動時にここで設定した条件を満たしている場合にのみ獲得します。", "条件を設定していない場合は、発動するたびに報酬を獲得します。", "requiringGroupを有効にすると、ここで指定するidの意味がカテゴリ・アクション・アイテム個別のIDからグループIDに変わります。"],
			children: requirement.children,
		},
		acquisitions: {
			title: "報酬",
			summary: "イベント発動時の報酬設定",
			points: ["タイミングが成立し、かつ条件を満たしている時に得られる報酬です。", "タスクと違って受け取る操作は要らず、発動と同時に自動で獲得します。", "数量にマイナスを設定することができます。例えばゲームオーバー時にアイテムの数量をマイナスにすれば、それらを失います。"],
			children: acquisition.children,
		},
		group: {
			title: "タスクグループ",
			summary: "イベントでは使用しません",
			points: ["ミッションやタスクの一覧に表示されないため、グループの指定は使いません。", "エディターでは入力欄が表示されません。"],
		},
	},
});

export const unique: Type.Unique = {
	title: "固定イベント",
	summary: "決まったタイミングで発動するメッセージと報酬",
	points: ["ワールドを初めて開いた時やゲームオーバーになった時など、決まったタイミングで発動して専用の画面を開きます。", "タイミングごとに1つずつ用意されており、追加も削除もできません。使わないタイミングは空欄のままにします。", "ミッションやタスクの一覧には表示されません。条件を満たすと達成になるものはタスクで設定します。", "報酬は発動と同時に自動で獲得します。タスクのような受け取りの操作もリボンもありません。", "発動時にカテゴリのレベル、アクションの実行回数、アイテムの所持数を変化させることができます。", "名前・説明・アイコンを空欄にすると、プレイヤーに内蔵されている既定の文言とアイコンが使われます。"],
	list: [
		["タイミング", "発動条件", "繰り返し"],
		["`comebacked`", "オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時", "何度も"],
		["`gameovered`", "戦闘でプレイヤーのスタミナがなくなった時", "何度も"],
		["`welcomed`", "このワールドを初めて起動した時", "一度のみ"],
		["`completed`", "全カテゴリのレベルが最大値（maxCategoryLevels）に達した時", "一度のみ"],
		["`obtained`", "single種別のアクション（宝箱など）を完了・確認した時", "何度も"],
	],
	links: { task: "task" },
	children: {
		comebacked: toUniqueEvent("復帰時", "オフラインから復帰した時に発動", ["オフラインから1秒以上経過して復帰し、かつ進行中のアクションがあった時に発動します。", "離れているあいだの進行のまとめと一緒に表示されます。"], ["`comebacked`で固定されており、編集できません。", "復帰するたびに何度でも発動します。"]),
		gameovered: toUniqueEvent("ゲームオーバー時", "戦闘でスタミナがなくなった時に発動", ["戦闘でプレイヤーのスタミナがなくなった時に発動します。", "報酬の数量にマイナスを設定すれば、ゲームオーバーの代償を持たせることができます。"], ["`gameovered`で固定されており、編集できません。", "ゲームオーバーになるたびに何度でも発動します。"]),
		welcomed: toUniqueEvent("初回開始時", "ワールドを初めて開いた時に発動", ["このワールドを初めて起動した時に発動します。", "世界観の説明や、開始時に渡す支度品の受け渡しに使います。"], ["`welcomed`で固定されており、編集できません。", "初回の起動時に一度だけ発動します。"]),
		completed: toUniqueEvent("クリア時", "全カテゴリが最大レベルに達した時に発動", ["全カテゴリのレベルが最大値（maxCategoryLevels）に達した時に発動します。", "numeric（数値）でないカテゴリは判定から除かれます。"], ["`completed`で固定されており、編集できません。", "条件を満たした時に一度だけ発動します。"]),
		obtained: toUniqueEvent("単発アクション完了時", "宝箱などの単発アクションを完了した時に発動", ["single種別のアクション（宝箱など）を完了・確認した時に発動します。", "アクション自体の報酬とは別に、ここで設定した報酬を上乗せできます。"], ["`obtained`で固定されており、編集できません。", "単発アクションを完了するたびに何度でも発動します。"]),
	},
	options: {
		label: "unique",
	},
};

// タスク・変化イベント・固定イベントをまとめたイベント全体
export const events: Type.Events = {
	title: "イベント",
	summary: "タスク・変化イベント・固定イベントをまとめた、ワールドのイベント全体",
	points: ["ワールドのイベントはタスク（tasks）・変化イベント（changed）・固定イベント（unique）の3種類で構成されます。", "タスクは条件を満たすと達成になるミッションです。", "変化イベントは数量の増加をきっかけに繰り返し発動する、画面に表示されない内部処理用のイベントです。", "固定イベントはタイミングごとに1つずつ用意される、追加・削除できない枠です。"],
	list: expandList("種類", [task, changed, unique], "説明"),
	children: {
		tasks: { ...task, options: { ...task.options, array: true } },
		changed: { ...changed, options: { ...changed.options, array: true } },
		unique: unique,
	},
	options: {
		label: "events",
		linkedList: true,
	},
};

export const basic: Type.Basic = {
	title: "konfigurasi dasar",
	summary: "Item konfigurasi dasar untuk dunia secara umum.",
	points: ["ワールドの名前、説明、背景、通貨、容量、カテゴリの最大レベル、経験値の上昇率、割引率、標準戦闘パラメータなどを設定します。", "Konfigurasi ini memengaruhi seluruh dunia."],
	list: expandList("nama", [overview, general, design, development], "Deskripsi"),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "basic",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "dunia",
	summary: "Keseluruhan konfigurasi dunia game dan struktur data",
	points: ["Data tentang game yang dapat dimainkan di konsol.", "Konfigurasinya memungkinkan Anda untuk membuat permainan pengabaian sesuai keinginan.", "ワールドはカテゴリ、アクション、アイテム、イベントなどの要素を内包します。"],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		skills: { ...skill, options: { ...skill.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: events,
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "world",
	},
};

// editor

export const editor: Markdown = {
	title: "editor",
	summary: "Penjelasan tentang cara menggunakan editor dan struktur dunia.",
	list: expandList("nama", [world, basic, type, events, component, miscellaneous], "Deskripsi"),
	options: {
		label: "editor",
		linkedList: true,
		directory: "editor",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: editor,
	twig: [
		{ title: world },
		{ title: basic, twig: [overview, general, design, development] },
		{ title: type, twig: [category, action, item, skill, group, preset] },
		{ title: events, twig: [task, changed, unique] },
		{ title: component, twig: [information, requirement, acquisition, combat, property] },
		{ title: miscellaneous, twig: [translation] }
	],
};
