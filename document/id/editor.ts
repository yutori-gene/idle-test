import * as Type from "~d/type/descriptionType";
import { Markdown, Tree, expandList } from "~d/type/markdownType";

// quate

const typeTree = `
world
├── category
├── action
├── item
├── group
├── event
└── preset
`;

// miscellaneous

export const translation: Markdown = {
	title: "terjemahan",
	summary: "Konfigurasi untuk menerjemahkan teks dalam game ke dalam bahasa lain.",
	points: ["Mengatur teks yang akan diterjemahkan.", "Konfigurasi bahasa tersedia apabila konfigurasi terjemahan diaktifkan.", "Jika terjemahan dinonaktifkan, informasi yang dijelaskan selama pengembangan akan ditampilkan apa adanya.", "Konfigurasi terjemahan dan pengalihan bahasa tidak dapat dilakukan selama pengembangan pra-publikasi."],
	options: {
		label: "terjemahan",
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
							points: ["Contoh perintah: terjemahkan nilai `nama` dan `penjelasan` dari data JSON yang diunggah dari Inggris ke Jepang. Jangan ubah bagian lain dari data."],
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
	list: expandList("suplemen", [translation]),
	options: {
		label: "lain-lain",
		linkedList: true,
	},
};

// componsnt

export const property: Type.Property = {
	title: "properti",
	summary: "Konfigurasi efek yang dimiliki Item.",
	points: ["Ini adalah item efek yang dapat dikonfigurasi pada item.", "Item dengan tipe Peralatan `perlu` atau `bisa dikonsumsi` hanya berlaku saat dilengkapi. Untuk item `tidak perlu`, efeknya hanya berlaku saat dimiliki.", "Nilai untuk kedua item dihitung sebagai penyesuaian untuk perbedaan level antara level pemain dan level Aksi.", "Misalnya, jika nilai serangan adalah 10, serangan dihitung seolah-olah level pemain 10 lebih tinggi dari level Aksi. Nilai minus adalah kebalikannya.", "SERANGAN, PERTAHANAN, KETEPATAN, PENGHINDARAN dan PEMULIHAN hanya berlaku untuk aksi tipe `stamina`."],
	list: [
		["properti", "Rincian efektivitas."],
		["kecepatan", "Mengurangi waktu yang diperlukan untuk suatu aksi. Waktu yang diperlukan bervariasi secara terbalik dengan perbedaan level."],
		["kesempatan", "Mengubah probabilitas sukses suatu aksi. Probabilitas meningkat secara proporsional dengan perbedaan level."],
		["pengalaman", "Mengubah pengalaman akuisisi. Meningkat secara proporsional dengan perbedaan level (perhitungannya terbalik: semakin tinggi Aksi level, semakin banyak yang Anda peroleh)."],
		["serangan", "Mengubah kerusakan stamina yang diberikan kepada lawan. (Hanya Aksi Stamina)."],
		["pertahanan", "Mengurangi kerusakan stamina yang diterima dari lawan. (hanya aksi stamina)."],
		["akurasi", "Mengurangi tingkat serangan yang meleset. (hanya aksi stamina)."],
		["penghindaran", "Mengubah tingkat penghindaran serangan lawan. (hanya aksi stamina)."],
		["mengembalikan", "Mengubah jumlah stamina yang dipulihkan di akhir aksi. (hanya untuk aksi stamina)."],
	],
	children: {
		category: {
			title: "Kategori.",
			summary: "Spesifikasi kategori yang berlaku untuk properti tersebut.",
			points: ["Konfigurasi ID kategori yang berlaku untuk properti ini.", "Konfigurasi `*` berlaku untuk Kategori.", "Jika kosong, ini berlaku untuk Kategori di mana Item tersebut berada."],
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
			points: ["Tingkat penghindaran dihitung dengan asumsi bahwa level pemain jauh lebih tinggi daripada level Aksi."],
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
		label: "properti",
	},
};

export const combat: Type.Combat = {
	title: "nilai tempur",
	summary: "Nilai koreksi tempur untuk tipe aksi stamina.",
	points: ["Nilai koreksi hanya berlaku untuk aksi tipe `stamina`.", "Setiap nilai dihitung sebagai koreksi tambahan untuk perbedaan level antara pemain dan Aksi.", "Misalnya, jika nilai serangan adalah 10, kerusakan serangan dihitung seolah-olah level pemain 10 lebih tinggi dari level Aksi. Jika minus, koreksinya berlawanan arah.", "Jika dalam konfigurasi ke `defaultCombat` di umum, ini akan menjadi parameter pertempuran default untuk seluruh dunia."],
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
			points: ["Semakin tinggi nilainya, semakin banyak stamina yang dipulihkan."],
		},
	},
	options: {
		label: "pertempuran",
	},
};

export const acquisition: Type.Acquisition = {
	title: "akuisisi",
	summary: "Konfigurasi akuisisi level item dan kategori.",
	points: ["Konfigurasi akuisisi.", "Anda dapat mengubah level kategori serta item, dan hitung Aksi telah dilakukan.", "Probabilitas untuk mendapatkan produk dapat dikonfigurasi."],
	list: [
		["Tipe", "Apa yang Anda akuisisi."],
		["Kategori.", "level"],
		["Aksi", "Hitung dieksekusi."],
		["Item", "hitung jumlah harta benda"],
	],
	children: {
		type: {
			title: "Tipe",
			summary: "Jenis elemen yang akan diperoleh.",
			list: [
				["Tipe", "Apa yang diperoleh dalam akuisisi."],
				["Kategori.", "Level (konversi pengalaman ditambahkan)"],
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
			points: ["Konfigurasi minus mengurangi jumlah kepemilikan, berapa kali kepemilikan tersebut dilakukan, dan levelnya. Namun, tidak boleh dibawah 0.", "Jika sebuah item memiliki jumlah kepemilikan maksimum (maks), jumlah kepemilikan tidak akan bertambah melebihi nilai tersebut.", "Jika tipenya adalah Kategori, nilai yang ditetapkan ditambahkan langsung ke level (1 untuk 1 level, 0,5 untuk 0,5 level). Cara yang biasa digunakan untuk menyesuaikan hal ini adalah dengan melakukan konfigurasi untuk mengatur pengalaman dari aksi tersebut. Konfigurasi ini tidak perlu kecuali tidak ada tujuan khusus."],
		},
		chance: {
			title: "Probabilitas [-1 hingga 1]",
			summary: "Probabilitas keberhasilan perolehan yang sukses (nilai negatif hanya dievaluasi saat gagal)",
			points: ["Konfigurasi probabilitas perolehan menggunakan bilangan desimal antara -1 hingga 1. Nilai absolut digunakan untuk menentukan probabilitas tersebut.", "Jika nilaiya positif, penilaian hanya dilakukan saat Aksi sukses; nilai `1` berarti pasti diperoleh, sedangkan nilai `0.5` berarti diperoleh dengan probabilitas 50%.", "Jika nilainya negatif, penilaian hanya dilakukan saat Aksi gagal; nilai `-1` berarti pasti diperoleh, sedangkan nilai `-0,5` berarti diperoleh dengan probabilitas 50%.", "Pada nilai `0`, item tersebut tidak akan diperoleh baik saat sukses maupun saat gagal.", "Nilai defaultnya adalah `1` (pasti diperoleh jika sukses)."],
		},
	},
	links: { type: "Jenis" },
	options: {
		label: "akuisisi",
	},
};

export const requirement: Type.Requirement = {
	title: "syarat dan ketentuan",
	summary: "Konfigurasi syarat untuk penggunaan dan tampilan elemen.",
	points: ["Ini adalah konfigurasi kondisi untuk setiap elemen berdasarkan kategori, aksi, dan item.", "Jika semua konfigurasi tidak ada, operasi yang ditunjukkan dalam tabel tidak dapat dilakukan.", "Jika fungsi kunci terkunci, elemen itu sendiri akan disembunyikan sampai kondisi terpenuhi."],
	list: [
		["Di mana harus melakukan konfigurasi", "Apa yang tidak ada kecuali jika syarat-syaratnya terpenuhi."],
		["Kategori.", "Eksekusi semua aksi dan manipulasi Item dalam Kategori"],
		["Aksi", "Pelaksanaan aksi"],
		["Item", "Manipulasi item (misalnya Peralatan)"],
	],
	children: {
		type: {
			title: "Tipe",
			summary: "Jenis elemen yang direferensikan sebagai kondisi.",
			list: [
				["Tipe", "Nilai yang direferensikan"],
				["Kategori.", "Level kategori."],
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
			points: ["Probabilitas bahwa sebuah item akan dikonsumsi ketika kondisi terpenuhi dan Aksi dilakukan.", "Selalu dikonsumsi pada tingkat `1`, 50% kemungkinan konsumsi pada tingkat `0,5` dan tidak ada konsumsi pada tingkat `0`.", "Nilai defaultnya adalah `1` (selalu dikonsumsi).", "Tidak valid jika tipenya selain Item."],
		},
		equipment: {
			title: "Peralatan",
			summary: "Memerlukan Item dalam keadaan Peralatan (hanya berlaku jika Tipe-nya adalah Item) atau",
			points: ["Ketika diaktifkan, diperlukan untuk item dilengkapi serta dimiliki.", "Tidak valid jika tipenya selain Item."],
		},
	},
	links: { type: "Jenis" },
	options: {
		label: "persyaratan",
	},
};

export const information: Type.Information = {
	title: "informasi",
	summary: "Lakukan konfigurasi untuk menetapkan informasi dasar tentang elemen (ID, nama, ikon, warna, dll.)",
	points: ["Item informasi dasar yang umum untuk setiap elemen di dunia (Kategori, Aksi, item, acara, dll.).", "Setiap elemen memiliki konfigurasi yang terpisah."],
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
							points: ["Jika ID adalah `stylish-kapak-kuat`, maka namanya adalah `Kapak Kuat Bergaya`."],
						},
					},
				},
				noDuplicate: {
					title: "Terdapat tidak ada duplikasi.",
					summary: "Larangan duplikasi ID dalam tipe yang sama.",
					points: ["Tiada menduplikasi dalam kategori, aksi, item, acara, dan tipe preset karena digunakan untuk mengidentifikasi elemen.", "Memiliki ID yang sama untuk tipe yang berbeda tidak menjadi masalah."],
					links: { type: "Jenis" },
				},
			},
		},
		name: {
			title: "Nama.",
			summary: "Nama elemen seperti yang terlihat",
			points: ["Nama elemen yang ditampilkan dalam permainan.", "Bahasa selain Inggris juga dapat dimasukkan.", "Nama yang menduplikasi elemen lain dapat diterima.", "Jika terlalu panjang, bagian yang meluap akan dihilangkan dari tampilan selama pemutaran dengan `...`."],
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
						"tipe file": {
							title: "Jenis file.",
							summary: "Format file gambar yang didukung.",
							points: ["Anda dapat menggunakan jenis umum yang dapat ditampilkan di browser.", "JPEG, PNG, GIF, WebP, SVG, dll."],
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
							points: ["Cari `Iconify` untuk ikon yang dapat ditampilkan.", "Anda dapat dengan cepat menemukan ikon terbaik dengan mencari ikon.", "Pilih ikon untuk melihat pengenalnya (set ikon ketik `:` nama ikon), seperti `game-icons:sword-wound`, dan tempelkan langsung ke dalam bidang ikon ini."],
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
			title: "variasi",
			summary: "Konfigurasi warna tampilan elemen.",
			points: ["Sebagai warna elemen, warna ini diterapkan ke ikon elemen dan warna latar belakang.", "Pilih dari pemilih warna editor."],
			children: {
				"warisan-dari-orangtua": {
					title: "Pewarisan dari elemen induk",
					summary: "Mengambil alih konfigurasi warna elemen.",
					points: ["Jika kosong, warna konfigurasi dalam elemen akan diambil alih.", "Hirarki tipe untuk elemen adalah sebagai berikut", "Sebagai contoh, jika sebuah aksi memiliki konfigurasi warna individual, maka warna tersebut akan digunakan, sedangkan jika aksi tidak ada konfigurasi warna individual, maka kategori atau warna dunia yang akan digunakan."],
					quote: typeTree,
					links: { type: "Jenis" },
				},
			},
		},
	},
	options: {
		label: "informasi",
	},
};

export const component: Markdown = {
	title: "komponen",
	summary: "Bagian umum",
	points: ["Komponen umum yang digunakan di setiap konfigurasi lokasi diekstraksi dan ditangani.", "Komponen yang digunakan dalam semua area ini adalah umum, tetapi sebagian komponen tidak ada pada sebagian item."],
	list: expandList("komponen", [information, requirement, acquisition, combat, property]),
	options: {
		label: "komponen",
		linkedList: true,
	},
};

// type

export const preset: Type.Information = {
	...information,
	title: "preset",
	summary: "Menyesuaikan tampilan elemen sistem",
	points: ["Mengganti teks dan ikon UI yang sudah terintegrasi ke dalam mesin game (pemain).", "Hanya yang cocok dengan preset yang ada berdasarkan ID yang akan diganti.", "Hanya item yang telah Anda konfigurasi yang akan diganti. Contohnya, jika hanya ikon yang dilakukan konfigurasi, item lain seperti nama dan warna akan menggunakan yang asli."],
	options: {
		label: "preset",
	},
};

export const event: Type.Event = {
	title: "acara",
	summary: "Sistem pesan dan penghargaan yang dipicu oleh kondisi.",
	points: ["Hal ini dipicu ketika konfigurasi waktu/kondisi terpenuhi dan pesan ditampilkan.", "Hal ini dapat dipicu pada saat pertama kali memulai, ketika permainan berakhir, ketika kembali dari mati, atau ketika kondisi tertentu terpenuhi.", "Hal ini dapat mengubah level Kategori, jumlah aksi yang dilakukan dan jumlah Item yang dimiliki ketika diaktifkan."],
	children: {
		information: information,
		timing: {
			title: "waktu",
			summary: "Konfigurasi waktu pemicuan acara.",
			list: [
				["waktu", "kondisi aktivasi", "ulangi"],
				["'cocok'.", "Ketika konfigurasi yang ditetapkan dalam KONDISI terpenuhi untuk pertama kalinya.", "hanya sekali"],
				["'kembali lagi'.", "Ketika seseorang kembali dari offline selama lebih dari satu detik dan ada aksi yang sedang berlangsung.", "sering"],
				["`gameovered`.", "Ketika stamina pemain habis dalam pertempuran.", "sering"],
				["`selesai`.", "Ketika level maksimum semua kategori (maxCategoryLevels) tercapai.", "hanya sekali"],
				["\"Selamat datang\".", "Ketika saya pertama kali memulai dunia ini.", "hanya sekali"],
				["`obtained`", "Saat menyelesaikan atau memverifikasi aksi jenis single (seperti peti harta karun, dll.). Jika persyaratan terpenuhi, hadiah acara juga akan ditambahkan", "sering"],
			],
		},
		unlocked: {
			title: "Tampilan awal",
			summary: "Status tampilan awal ikon acara (pemicuan ditentukan oleh waktu, dan dengan konfigurasi ini, ikon tidak akan dipicu)",
			points: ["Kondisi pemicu acara ditentukan oleh waktu, dan opsi ini hanya memengaruhi tampilan ikon daftar.", "secreted: Tidak akan ditampilkan sama sekali di daftar acara sampai semua persyaratan terpenuhi (meskipun pemicunya sendiri terjadi sesuai waktu yang ditentukan).", "hidden・hinted: Ikon tersebut akan ditampilkan dengan garis miring sebagai tanda belum dibuka.", "dirilis: Garis miring akan hilang dan ditampilkan sebagai \"telah dibebaskan\"."],
		},
		requirements: {
			title: "syarat dan ketentuan",
			summary: "Ketentuan untuk memicu acara dan pemberian hadiah.",
			points: ["Ketentuan untuk memicu acara atau pemberian hadiah.", "`matched` hanya akan aktif dan Anda akan mendapatkan hadiah jika kondisi ini terpenuhi.", "Selain pada saat `matched`, efek ini akan terpicu jika kondisi waktu terpenuhi. Setelah itu, akuisisi hadiah hanya akan terjadi jika memenuhi konfigurasi yang ditetapkan di sini."],
			children: requirement.children,
		},
		acquisitions: {
			title: "hadiah",
			summary: "Konfigurasi hadiah saat acara dipicu.",
			points: ["Ini adalah hadiah ketika acara dipicu.", "Pada `matched`, Anda hanya akan mendapatkan hadiah jika kondisi terpenuhi dan fitur tersebut diaktifkan.", "Selain `matched`, akuisisi hadiah hanya akan terjadi jika kondisi waktu terpenuhi dan syarat-syarat dalam `conditions` juga terpenuhi.", "Anda dapat melakukan konfigurasi kuantitas ke nilai Minus. Misalnya, jika Anda mengatur jumlah Item ke nilai Minus saat `gameovered`, Anda akan kehilangan Item tersebut saat permainan berakhir."],
			children: acquisition.children,
		},
		group: {
			title: "kelompok tugas",
			summary: "Pengidentifikasi grup tugas (saat ini tidak digunakan)",
			points: ["Item ini saat ini tidak digunakan. Item ini dicadangkan untuk penyempurnaan di masa mendatang."],
		},
	},
	options: {
		label: "acara",
	},
};

export const group: Type.Information = {
	...information,
	title: "kelompok (usu. orang)",
	summary: "Menetapkan grup tampilan untuk kategori, aksi, dan item",
	points: ["Tentukan grup untuk mengontrol urutan tampilan.", "Anda dapat mengatur grup yang ditentukan di sini untuk setiap kategori, aksi, dan item.", "Grup dengan kelompok yang sama ditampilkan berdekatan.", "Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat."],
	options: {
		label: "kelompok",
	},
};

export const item: Type.Item = {
	title: "Item",
	summary: "Elemen-elemen barang seperti peralatan dan bahan habis pakai",
	points: ["Elemen ini sendiri berkaitan dengan kepemilikan benda-benda seperti peralatan, barang habis pakai, dan barang berharga.", "Hanya satu yang dapat dilengkapi dalam suatu kategori, atau dapat tidak ada.", "Ada juga cara hitung untuk menggunakannya."],
	children: {
		information: information,
		category: {
			title: "Kategori.",
			summary: "ID dari kategori yang dimiliki item tersebut",
			points: ["Tentukan ID dari Kategori yang dimiliki Item ini."],
		},
		group: {
			title: "kelompok (usu. orang)",
			summary: "Menampilkan menit kelompok Item",
			points: ["Terapkan salah satu grup yang konfigurasi di Basic.", "Daftar item ditampilkan menurut urutan kelompok yang konfigurasi.", "Jika dibiarkan kosong, tidak ada pengelompokan yang dibuat."],
			links: { general: "umum" },
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
			links: { general: "umum" },
		},
		maximum: {
			title: "Jumlah maksimum yang dimiliki [pcs].",
			summary: "Batasan jumlah maksimum item yang dimiliki.",
			points: ["Jika 0, tidak ada batasan jumlah yang dapat dimiliki.", "Jika lebih dari 1, Anda hanya dapat memiliki hingga jumlah tersebut. Jika batas maksimum telah tercapai, akuisisi lebih lanjut tidak akan menambah jumlah yang dimiliki."],
		},
		equipmentType: {
			title: "Tipe Peralatan",
			summary: "Konfigurasi tipe untuk peralatan, efek, dan konsumsi Item.",
			points: ["Item yang dapat dilengkapi diperlukan untuk termasuk dalam grup yang ditentukan dalam Kategori `equipmentGroups`.", "Hanya satu item yang dapat dilengkapi dalam grup yang sama."],
			list: [
				["nilai", "Peralatan", "Efektivitas.", "konsumsi", "Contoh."],
				["'perlu'.", "Diperlukan", "melengkapi", "tidak ada", "Pedang, baju besi, dan peralatan lainnya."],
				["'habis pakai'.", "Diperlukan", "melengkapi", "Dikonsumsi saat aksi dilakukan", "Item yang dikonsumsi untuk mendapatkan efek, seperti ramuan."],
				["'tidak perlu'.", "Tidak perlu", "Setiap saat saat memegang kamera.", "tidak ada", "Item pasif yang efektif hanya dengan memilikinya."],
				["'tidak mungkin'.", "tidak diperbolehkan", "tidak ada", "tidak ada", "Item-item yang tidak ada seperti material dan puing-puing."],
			],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Persyaratan diperlukan untuk penggunaan item." },
		properties: { ...property, options: { ...property.options, array: true }, summary: "Properti efek dari item." },
		coinId: { title: "ID Mata Uang yang Diperdagangkan", summary: "ID mata uang yang digunakan untuk jual beli Item ini", points: ["Tentukan ID mata uang (koin) yang digunakan secara umum untuk nilai beli dan nilai jual.", "Jika kolom tersebut kosong, mata uang utama (yang tercantum di bagian awal daftar koin) akan digunakan."] },
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
			title: "Kategori.",
			summary: "ID dari kategori yang termasuk dalam Aksi tersebut",
			points: ["Tentukan ID dari Kategori yang menjadi bagian dari Aksi ini."],
		},
		attribute: {
			title: "atribut",
			summary: "Kategori atribut aksi",
			points: ["Atribut (kategori) individual dapat dikonfigurasi.", "Jika dibiarkan kosong, kategori yang menjadi miliknya akan diambil alih", "Misalnya, jika Anda konfigurasi atribut Sihir untuk aksi yang termasuk dalam kategori Kastil Iblis satu per satu, level dan properti kategori sihir akan dihitung dan diterapkan pada waktu penyelesaian aksi dan kerusakan."],
			links: { category: "kategori" },
		},
		group: {
			title: "kelompok (usu. orang)",
			summary: "Menampilkan menit kelompok aksi",
			points: ["Terapkan salah satu grup yang konfigurasi di Basic.", "Daftar aksi ditampilkan menurut urutan kelompok yang konfigurasi."],
			links: { general: "umum" },
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
			links: { property: "properti" },
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Persyaratan yang diperlukan untuk pelaksanaan aksi." },
		seconds: {
			title: "Waktu [detik].",
			summary: "Waktu yang dibutuhkan untuk melakukan aksi",
			points: ["Waktu standar (dalam detik) yang diperlukan untuk melakukan suatu aksi sekali.", "Untuk tipe `stamina`, ini adalah interval waktu untuk satu giliran (satu pengurangan stamina satu sama lain).", "Eksekusi aktual akan bervariasi karena perhitungan properti."],
			links: { property: "properti" },
		},
		experience: {
			title: "pengalaman [tingkat level berikutnya di 100]",
			summary: "Pengalaman yang diperoleh dari aksi yang sukses",
			points: ["Pengalaman standar yang diperoleh dari melakukan suatu aksi satu kali dan sukses; 100 setara dengan satu level pengalaman.", "Dalam kasus pertempuran, disarankan untuk menetapkan lebih banyak, karena itu merupakan akuisisi ketika lawan menang.", "Eksekusi aktual akan bervariasi karena perhitungan properti."],
			links: { property: "properti" },
		},
		chance: {
			title: "Probabilitas sukses [0-1].",
			summary: "Probabilitas sukses pada penyelesaian aksi",
			points: ["Probabilitas sukses pada saat penyelesaian Aksi.", "Selalu sukses jika `1`, selalu gagal jika `0`.", "Jika terjadi kegagalan, item yang dapat dikonsumsi akan habis, tetapi tidak ada hadiah atau pengalaman yang diperoleh.", "Eksekusi aktual akan bervariasi karena perhitungan properti."],
		},
		maximum: {
			title: "Jumlah maksimum lari [kali].",
			summary: "Jumlah maksimum aksi yang dapat diselesaikan.",
			points: ["Jumlah maksimum aksi yang dapat diselesaikan dengan sukses.", "Tidak terbatas untuk `0`.", "Ketika batas atas tercapai, aksi tidak lagi dapat dieksekusi."],
		},
		acquisitions: { ...acquisition, options: { ...acquisition.options, array: true }, summary: "Hadiah untuk akuisisi Aksi yang sukses." },
		progressType: {
			title: "Jenis Kemajuan",
			summary: "Tipe eksekusi aksi",
			points: ["Ada empat jenis."],
			list: [
				["Tipe", "detail operasi", "stamina", "Contoh."],
				["'gigih'.", "Ini adalah tipe aksi yang terus menerus diulang; Anda mendapatkan pengalaman dan hadiah untuk setiap penyelesaian.", "Tidak ada hubungan", "Penebangan, pertambangan, penangkapan ikan"],
				["'single'.", "Lakukan satu aksi dalam satu waktu. Jika terputus, kemajuan akan disimpan dan dapat dilanjutkan di lain waktu. Setelah selesai, pengguna menekan aksi konfirmasi untuk menerima hasilnya.", "Tidak ada hubungan", "Membuka peti harta karun, belajar keterampilan melalui membaca"],
				["\"Jepret\".", "Tipe aksi ini dilakukan secara instan. Diselesaikan dengan segera tanpa ada jeda waktu.", "Tidak ada hubungan", "berdagang, penggunaan Item."],
				["'stamina'.", "Setiap waktu yang dibutuhkan akan mengurangi stamina pemain dan lawan. Ketika stamina lawan habis, pengalaman dan hadiah akan diperoleh. Ketika stamina pemain habis, permainan berakhir dan semua aksi yang sedang berlangsung dibatalkan.", "Relevan.", "Operasi tempur dan berbahaya."],
			],
		},
		property: combat,
	},
	options: {
		label: "tindakan",
	},
};

export const category: Type.Category = {
	title: "Kategori.",
	summary: "Kerangka kerja umum untuk menit Aksi dan Item.",
	points: ["Merupakan klasifikasi utama.", "Contohnya, ini bisa dikonfigurasi dalam kerangka berpikir apa pun, seperti jarak dekat, jarak jauh, sihir, ruang bawah tanah, pandai besi, pabrik, dll.", "Aksi dan Item ditempatkan langsung dibawah dunia dan dikaitkan dengan ID Kategori."],
	children: {
		information: information,
		group: {
			title: "kelompok (usu. orang)",
			summary: "Menampilkan klasifikasi kelompok kategori",
			points: ["Terapkan salah satu grup yang dilakukan konfigurasi di Basic.", "Daftar kategori ditampilkan menurut urutan kelompok yang ditetapkan dalam konfigurasi."],
			links: { general: "umum" },
		},
		unlocked: {
			title: "Keadaan pembebasan awal",
			summary: "Status tampilan awal dan status pembebasan elemen (akan secara otomatis beralih ke status yang lebih tinggi jika persyaratan aktivasi terpenuhi)",
			points: ["secreted: Tidak akan ditampilkan sama sekali di antarmuka pengguna (UI) sampai semua persyaratan terpenuhi (tidak muncul di Petunjuk, dan disembunyikan dalam daftar persyaratan/hadiah).", "hidden: Akan tersembunyi sepenuhnya (namanya juga akan berwarna abu-abu dan tidak dapat dioperasikan) selama tidak dirujuk oleh elemen pelepasan mana pun dan persyaratannya belum terpenuhi.", "hinted (default): Hanya nama yang ditampilkan sebagai pratinjau, tetapi tidak dapat dioperasikan sampai dibuka.", "released: Dapat diakses dan dioperasikan sejak awal tanpa memandang kondisi apa pun (sebelumnya disebut “Tampilkan sejak awal”)."],
		},
		requirements: { ...requirement, options: { ...requirement.options, array: true }, summary: "Persyaratan untuk penggunaan kategori." },
		equipmentGroups: {
			title: "kelompok Peralatan",
			summary: "Penunjukan kelompok item yang mungkin dilengkapi dalam kategori ini.",
			points: ["Daftar nama kelompok item yang dapat dilengkapi dengan Peralatan dalam Kategori ini.", "Hanya item dari grup yang sesuai dengan nama grup yang ditentukan di sini yang dapat menjadi Peralatan.", "Jika string kosong ditentukan, item dengan konfigurasi grup yang tidak disetel (kosong) menjadi memenuhi syarat untuk Peralatan.", "Hanya satu item yang dapat digunakan sebagai Peralatan dalam grup yang sama. Saat Anda melengkapi item baru, peralatan yang ada dalam grup yang sama secara otomatis dilepas.", "Jika daftar kosong (0 buah), tidak ada peralatan yang dapat digunakan."],
			links: { general: "umum" },
		},
		numeric: {
			title: "Ketersediaan level",
			summary: "Ketersediaan fungsi level kategori",
			points: ["Ini adalah bendera untuk mengindikasikan apakah kategori ini memiliki level atau tidak.", "Jika nyala, berarti ada levelnya; jika mati, berarti tidak ada.", "Contohnya adalah mengaktifkan kategori berdasarkan pengalaman, seperti ilmu pedang dan sihir, dan mematikan kategori berdasarkan lokasi, seperti ruang bawah tanah dan pandai besi."],
		},
		standaloneProgress: {
			title: "kemajuan secara bersamaan",
			summary: "Konfigurasi eksekusi paralel dengan kategori",
			points: ["Ini adalah bendera untuk menunjukkan apakah aksi dalam kategori ini dapat dilanjutkan secara paralel dengan aksi dalam kategori lain.", "Jika aktif, tindakan dapat dilanjutkan secara simultan dan independen dari kategori aksi lainnya.", "Jika mati, aksi ini tidak dapat dilakukan secara bersamaan dengan aksi dalam kategori lain yang juga memiliki konfigurasi mati. Ketika Anda mulai aksi baru dalam kategori ini, aksi yang sedang berlangsung dalam kategori lain yang mandiri secara otomatis dibatalkan."],
		},
		background: {
			title: "latar belakang",
			summary: "Konfigurasi latar belakang kategori",
			points: ["Konfigurasi latar belakang untuk kategori ini.", "Apabila kategori dipilih, gambar latar belakang akan berubah sehubungan dengan kategori tersebut.", "Jika tidak ada konfigurasi, pengaturan latar belakang dunia digunakan sebagaimana adanya."],
		},
	},
	options: {
		label: "kategori",
	},
};

export const type: Markdown = {
	title: "Tipe",
	summary: "Klasifikasi dasar dunia",
	points: ["Dunia terdiri dari enam tipe.", "Semua elemen ditempatkan langsung dibawah dunia.", "Aksi dan Item dikaitkan dengan ID dari Kategori yang menjadi miliknya."],
	list: expandList("Tipe", [category, action, item, group, event, preset]),
	quote: typeTree,
	options: {
		label: "Jenis",
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
		label: "pengembangan",
	},
};

export const design: Type.Design = {
	title: "desain",
	summary: "Konfigurasi tampilan visual seperti warna dunia dan font.",
	points: ["Konfigurasi tentang tampilan dunia.", "Mengenai desain dunia secara keseluruhan, jika ada konfigurasi individual untuk tiap elemen, maka konfigurasi tersebut yang diutamakan."],
	children: {
		mainColor: {
			title: "warna dominan",
			summary: "Warna-warna utama dunia",
			points: ["Digunakan sebagai warna batang.", "Warna yang berlawanan dengan warna ini digunakan untuk bayangan batang."],
		},
		subColor: {
			title: "warna tambahan",
			summary: "Warna tambahan untuk latar belakang dan teks",
			points: ["Warna yang digunakan sebagai latar belakang dan warna teks.", "Nuansa yang mendekati warna utama akan menyatu."],
		},
		background: {
			title: "gambar latar belakang",
			summary: "Gambar latar belakang untuk seluruh permainan",
			points: ["Konfigurasi gambar latar belakang game.", "Jika tidak ada gambar yang dikonfigurasi, latar belakang adalah gradien berdasarkan warna tambahan."],
		},
	},
	options: {
		label: "desain",
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
			links: { translation: "terjemahan" },
		},
		offlineMaxHours: {
			title: "Waktu offline maksimum [jam].",
			summary: "Batas waktu untuk kemajuan mati.",
			points: ["Konfigurasi jumlah waktu maks kemajuan saat mati.", "Misalnya, jika 6 waktu ditetapkan, proses kembali mati hingga 6 waktu akan diproses, tetapi jika waktu atas itu diizinkan, waktu mati akan diperlakukan sebagai 6 waktu.", "Jika 0 waktu ditetapkan, tidak ada proses pemrosesan yang terjadi sama sekali saat kembali mati.", "Nilai maks adalah 24 waktu."],
			links: { category: "kategori" },
		},
		maxCategoryLevels: {
			title: "Kategori maks",
			summary: "Batas level atas untuk kategori.",
			points: ["Konfigurasi level maks untuk setiap kategori.", "Jika akuisisi pengalaman terjadi di luar level ini, level maks yang konfigurasi di sini digunakan dalam perhitungan properti.", "Nilai ini tidak memiliki hubungan untuk kategori tanpa level."],
			links: { category: "kategori" },
		},
		locking: {
			title: "fungsi terkunci",
			summary: "Menyembunyikan item sampai persyaratan terpenuhi",
			points: ["Jika diaktifkan, item tindakan Kategori akan disembunyikan sementara item tersebut tidak ada yang pernah menggunakannya atau memilikinya dan persyaratannya belum terpenuhi.", "Jika dinonaktifkan, semua item akan ditampilkan dari awal, tetapi tidak dapat dijalankan atau dilengkapi dengan Peralatan hingga persyaratan terpenuhi."],
			links: { category: "kategori", action: "tindakan", item: "item" },
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
			links: { information: "informasi", item: "item" },
		},
		capacity: {
			title: "kapasitas",
			summary: "Konfigurasi kapasitas inventaris.",
			points: ["Mengontrol jumlah maksimum berbagai jenis item yang dapat dimiliki pemain.", "Setiap item dikendalikan oleh jumlah jenis item yang Anda miliki, tidak ada jumlah item yang Anda miliki.", "Menetapkan `initialCount` ke 0 berarti kapasitas tidak terbatas.", "Ketika merujuk pada item kapasitas dalam kondisi atau hadiah, gunakan ID yang ditetapkan dalam konfigurasi di sini."],
			children: {
				information: information,
				initialCount: {
					title: "Nilai default [pcs].",
					summary: "Kapasitas inventaris awal (jumlah item berbeda yang dapat disimpan)",
					points: ["Kapasitas awal (jumlah item berbeda yang dapat dimiliki) mulai permainan.", "Jika `0` ditetapkan, kapasitas tidak terbatas."],
				},
				initialCost: {
					title: "Harga dasar [koin].",
					summary: "Harga awal untuk satu kapasitas tambahan.",
					points: ["Harga dasar (dalam koin) untuk meningkatkan kapasitas inventaris sebanyak satu slot.", "Harga aktual dihitung sebagai 'harga dasar x persentase kenaikan ^ hitung beli'", "Contoh: harga dasar 100, tingkat kenaikan 1,2, 100 koin pertama, 120 koin kedua, 144 koin ketiga."],
				},
				increasingRate: {
					title: "Persentase peningkatan [kali].",
					summary: "Persentase peningkatan biaya perluasan kapasitas",
					points: ["Ini adalah pengganda untuk berapa banyak biaya ekspansi kapasitas meningkat dengan beli ke-n.", "Untuk `1.0` harganya selalu sama, untuk `1.2` harganya 20% lebih tinggi setiap kali dibeli.", "Rumus: harga dasar x persentase kenaikan ^ jumlah kali beli"],
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
			summary: "Konfigurasi jumlah slot untuk eksekusi beruntun (jadwal) aksi",
			points: [
				"Mengelola jumlah slot untuk menjalankan Aksi secara berurutan (jadwal).",
				"Jumlah slot, sama seperti kapasitas, dapat dibeli menggunakan mata uang, dan Anda juga dapat menambahnya dengan memilih Item dari antrian sebagai hadiah dari Aksi atau acara.",
				"Jika Anda ingin merujuk item dalam antrian berdasarkan kondisi atau imbalan, gunakan ID yang telah dikonfigurasi di sini.",
			],
			children: {
				information: information,
				initialCount: {
					title: "Nilai default [pcs].",
					summary: "Jumlah slot eksekusi berurutan saat permainan mulai",
					points: ["Ini adalah jumlah slot reservasi saat permainan dimulai.", "Nilai minimumnya adalah `1` (tidak ada perlakuan seperti `0` = tak terbatas, seperti pada kapasitas)."],
				},
				initialCost: {
					title: "Harga dasar [koin].",
					summary: "Harga awal untuk menambah satu slot",
					points: ["Ini adalah harga dasar (koin) untuk menambah satu slot eksekusi berurutan.", "Harga aktual dihitung sebagai 'harga dasar x persentase kenaikan ^ hitung beli'", "Contoh: harga dasar 100, tingkat kenaikan 1,2, 100 koin pertama, 120 koin kedua, 144 koin ketiga."],
				},
				increasingRate: {
					title: "Persentase peningkatan [kali].",
					summary: "Tingkat kenaikan biaya perluasan kapasitas",
					points: ["Ini adalah faktor pengali yang menunjukkan seberapa besar kenaikan biaya perluasan kuota saat membeli ke-n kali.", "Untuk `1.0` harganya selalu sama, untuk `1.2` harganya 20% lebih tinggi setiap kali dibeli.", "Rumus: harga dasar x persentase kenaikan ^ jumlah kali beli"],
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
			points: ["Seiring dengan meningkatnya level suatu kategori, maka semakin tinggi pula tingkat peningkatan pengalaman yang diperlukan untuk mencapai level berikutnya.", "Meningkatkan nilai ini akan meningkatkan tingkat kesulitan.", "Jumlah pengalaman yang diperlukan untuk naik ke level berikutnya adalah (tingkat kenaikan pengalaman)^(level saat ini - 1)."],
			list: [
				["Tingkat peningkatan pengalaman", "Lv.1", "Lv.2", "Lv.10", "Lv.50", "Lv.99."],
				["0", "x1.00", "x1.00", "x1.00", "x1.00", "x1.00"],
				["0.02", "x1.00", "x1.02", "x1.22", "x2.69", "x5.52"],
				["0.05", "x1.00", "x1.05", "x1.55", "x11.47", "x131.50"],
				["0.10", "x1.00", "x1.10", "x2.36", "x117.39", "x5.7×10⁴"],
				["0.20", "x1.00", "x1.20", "x6.19", "x3,3 x 10³", "x1,3 x 10¹¹"],
			],
			links: { category: "kategori" },
		},
		actionLevelLimit: {
			title: "pembatasan level Aksi",
			summary: "Meminta hitung berapa kali aksi atribut yang sama telah dieksekusi untuk eksekusi suatu aksi.",
			points: ["Jika diaktifkan, hitung kali aksi dengan atribut yang sama telah dieksekusi secara otomatis ditambahkan ke kondisi eksekusi setiap tindakan.", "Jumlah hitung yang diperlukan sama dengan nilai level aksi.", "Jika tidak ada atribut yang ditetapkan, ID dari kategori yang digunakan akan digunakan."],
		},
		defaultCombat: { ...combat, summary: "Parameter tempur default yang umum untuk Aksi.", points: ["Nilai koreksi tempur dasar yang berlaku untuk semua tipe aksi `stamina` yang sama.", "Nilai tempur (properti) dari setiap Aksi ditambahkan ke nilai default ini."], links: { action: "tindakan" } },
	},
	options: {
		label: "umum",
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
		label: "gambaran umum",
	},
};

export const basic: Type.Basic = {
	title: "konfigurasi dasar",
	summary: "Item konfigurasi dasar untuk dunia secara umum.",
	points: ["Konfigurasi nama dunia, deskripsi, latar belakang, mata uang, kapasitas, level maks kategori, tingkat peningkatan pengalaman, tingkat diskon, parameter pertarungan standar, dll.", "Konfigurasi ini memengaruhi seluruh dunia."],
	list: expandList("nama", [overview, general, design, development]),
	children: {
		overview: overview,
		general: general,
		design: design,
		development: development,
	},
	options: {
		label: "dasar",
		linkedList: true,
	},
};

// world


export const world: Type.World = {
	title: "dunia",
	summary: "Keseluruhan konfigurasi dunia game dan struktur data",
	points: ["Data tentang game yang dapat dimainkan di konsol.", "Konfigurasinya memungkinkan Anda untuk membuat permainan pengabaian sesuai keinginan.", "Dunia mencakup kategori, aksi, item, dan acara."],
	children: {
		basic: basic,
		categories: { ...category, options: { ...category.options, array: true } },
		actions: { ...action, options: { ...action.options, array: true } },
		items: { ...item, options: { ...item.options, array: true } },
		groups: { ...group, options: { ...group.options, array: true } },
		events: { ...event, options: { ...event.options, array: true } },
		presets: { ...preset, options: { ...preset.options, array: true } },
	},
	options: {
		label: "dunia",
	},
};

// editor

export const editor: Markdown = {
	title: "editor",
	summary: "Penjelasan tentang cara menggunakan editor dan struktur dunia.",
	list: expandList("nama", [world, basic, type, component, miscellaneous]),
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
		{ title: type, twig: [category, action, item, group, event, preset] }, 
		{ title: component, twig: [information, requirement, acquisition, combat, property] }, 
		{ title: miscellaneous, twig: [translation] }
	],
};
