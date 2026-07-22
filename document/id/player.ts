import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "bahasa",
	summary: "Mengganti bahasa",
	points: ["Mengganti bahasa yang ditampilkan dalam game.", "Hanya berlaku jika penulis telah menyediakan terjemahan."],
	options: {
		preset: "bahasa",
	},
};

export const event: Markdown = {
	title: "acara",
	summary: "Sistem berbasis kondisi.",
	points: ["Dipicu ketika kondisi terpenuhi.", "Pesan ditampilkan ketika diaktifkan, item diberikan atau dikurangi, dll."],
	options: {
		preset: "acara",
		label: "acara",
	},
};

export const miscellaneous: Markdown = {
	title: "informasi tambahan",
	summary: "Informasi tambahan lain yang dijelaskan.",
	children: { event: event, language: language },
	options: {
		preset: "lain-lain",
		label: "lain-lain",
	},
};

// world

export const debug: Markdown = {
	title: "debug",
	summary: "Operasi untuk pemeriksaan debugging",
	points: ["Hanya terlihat selama debugging.", "Ini tidak ditampilkan saat game diterbitkan dan didistribusikan."],
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "konfigurasi",
	summary: "Mengubah konfigurasi permainan",
	points: ["Konfigurasi pengaturan yang terkait dengan tampilan dan pemrosesan game.", "Data game juga dapat dimasukkan, dikeluarkan, dan diatur ulang."],
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "statistik",
	summary: "Ringkasan kemajuan",
	points: ["Anda dapat memeriksa kemajuan permainan sejauh ini."],
	options: {
		preset: "statistik",
	},
};

export const general: Markdown = {
	title: "umum",
	summary: "Konfigurasi dunia",
	points: ["Anda dapat memeriksa tingkat kesulitan dan konfigurasi khusus untuk dunia ini."],
	options: {
		preset: "umum",
	},
};

export const overview: Markdown = {
	title: "ringkasan",
	summary: "Tentang game ini.",
	points: ["Cari tahu tentang dunia game (pandangan dunia dan konfigurasi).", "Anda juga dapat mengetahui tentang konsol (sistem) yang menjalankan game ini."],
	options: {
		preset: "gambaran umum",
	},
};

export const world: Markdown = {
	title: "dunia",
	summary: "Anda dapat mengoperasikan dan memeriksa kontrol dan konfigurasi umum game,",
	children: { overview: overview, general: general, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "dunia",
		label: "dunia",
	},
};

// property

export const correction: Markdown = {
	title: "Koreksi properti.",
	summary: "Rincian koreksi properti.",
	points: ["Anda dapat memeriksa koreksi untuk properti tertentu dalam kategori ini.", "Koreksi ini disebabkan oleh efek item. Anda dapat memeriksa Item tersebut."],
	options: {
		preset: "koreksi",
	},
};

export const properties: Markdown = {
	title: "properti",
	summary: "Daftar nilai koreksi",
	points: ["Daftar properti konfigurasi untuk setiap Kategori.", "Properti adalah elemen yang memengaruhi pelaksanaan Aksi.", "Efektivitas dikoreksi dengan Peralatan. (Beberapa item tidak perlu dilengkapi)."],
	options: {
		preset: "properti",
	},
};

export const property: Markdown = {
	title: "properti",
	summary: "Memeriksa nilai koreksi",
	points: ["Properti adalah elemen yang memengaruhi pelaksanaan Aksi.", "Angka akhir dihitung dari nilai awal yang ditetapkan, dengan mempertimbangkan level kategori, level konfigurasi untuk Aksi dan koreksi untuk Item Peralatan."],
	children: { properties: properties, correction: correction },
	list: expandList("properti", [properties, correction]),
	links: {
		properties: "pemain/properti.",
		correction: "pemain / koreksi",
	},
	options: {
		label: "properti",
		preset: "properti",
	},
};

// item

export const trade: Markdown = {
	title: "transaksi",
	summary: "Beli atau jual Item dalam mata uang.",
	points: ["Beberapa item tidak ada yang bisa dibeli atau dijual.", "Item yang terkunci tidak dapat dibeli atau dijual.", "Terkadang terdapat batasan jumlah pembelian untuk kapasitas atau antrian (queue), dan jika batas tersebut tercapai, Anda tidak dapat membeli lagi. (Peningkatan yang diperoleh dari hadiah tidak termasuk dalam batasan ini.)"],
	options: {
		preset: "perdagangan",
	},
};

export const items: Markdown = {
	title: "Item",
	summary: "Daftar item dalam kategori.",
	points: ["Tekan dan tahan untuk beralih di antara item Peralatan.", "Hanya satu item dari daftar yang mungkin dilengkapi. (jika konfigurasi untuk dapat dilengkapi sebagai Peralatan)", "Item yang tidak ada yang memenuhi persyaratan rilis akan terkunci dan tidak dapat dilihat secara detail."],
	options: {
		preset: "item",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Detail barang.",
	points: ["Item adalah elemen sendiri yang terkait dengan kepemilikan objek seperti peralatan, barang habis pakai, dan barang berharga.", "Hanya satu item dari satu kategori yang mungkin dilengkapi. (Jika konfigurasi untuk Peralatan Kategori)", "Item yang tidak ada yang memenuhi persyaratan rilis akan terkunci dan tidak dapat dilihat secara detail."],
	children: { items: items, trade: trade },
	options: {
		preset: "item",
		label: "item",
	},
};

// action

export const act: Markdown = {
	title: "bertindak",
	summary: "Kontrol Aksi",
	points: ["Mulai atau berhenti aksi.", "Anda dapat menghitung jumlah proses yang dijalankan. Masukkan 0 untuk menjalankan hingga sumber daya habis."],
	options: {
		preset: "bertindak",
	},
};

export const actions: Markdown = {
	title: "Aksi.",
	summary: "Daftar aksi dalam kategori",
	points: ["Tekan lama untuk mengalihkan eksekusi Aksi.", "Hanya satu item dari sebuah kategori yang mungkin dieksekusi.", "Kategori memungkinkan kemajuan aksi di hitung kategori untuk dilanjutkan secara bersamaan.", "Aksi yang tidak ada yang memenuhi syarat pelepasan akan terkunci dan tidak dapat dilihat secara detail."],
	options: {
		preset: "tindakan",
	},
};

export const action: Markdown = {
	title: "Aksi",
	summary: "Elemen bertindak seperti mengumpulkan, membuat, dan bertarung.",
	points: ["Anda dapat memperoleh pengalaman untuk setiap bertindak, yang menjadikan level Anda atas.", "Setiap bertindak mengkonsumsi atau mendapatkan sebuah Item.", "Aksi yang tidak ada yang memenuhi syarat pelepasan akan terkunci dan tidak dapat dilihat secara detail."],
	children: { actions: actions, act: act },
	options: {
		preset: "tindakan",
		label: "tindakan",
	},
};

// category

export const category: Markdown = {
	title: "Kategori.",
	summary: "Kompilasi berbagai elemen.",
	points: ["Ini adalah elemen yang menyatukan aksi dan item."],
	options: {
		label: "kategori",
		preset: "kategori",
	},
};

// character
export const status: Markdown = {
	title: "status",
	summary: "Daftar semua properti",
	points: ["Hanya nilai koreksi kategori per item yang ditampilkan.", "Tergantung pada aksi yang akan dilakukan, terdapat koreksi lainnya."],
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventaris",
	summary: "Daftar semua Item",
	points: ["Tekan dan tahan untuk beralih di antara item Peralatan."],
	options: {
		preset: "persediaan",
	},
};

export const activity: Markdown = {
	title: "aktivitas",
	summary: "Daftar semua aksi",
	points: ["Tekan lama untuk mengalihkan eksekusi Aksi."],
	options: {
		preset: "aktivitas",
	},
};

export const character: Markdown = {
	title: "karakter",
	summary: "Identifikasi dan pengoperasian situasi protagonis.",
	points: ["Konten ini identik dengan apa yang ditampilkan dengan mengoperasikan Kategori."],
	children: { activity: activity, inventory: inventory, status: status },
	options: {
		label: "karakter",
		preset: "karakter",
	},
};

export const player: Markdown = {
	title: "pemain",
	summary: "Permainan dijelaskan untuk setiap kolom yang muncul di Play the Game.",
	points: ["Secara default, deskripsi yang sama muncul sebagai petunjuk di bawah setiap kolom.", "Petunjuk dapat disembunyikan dengan konfigurasi."],
	list: expandList("pemain", [character, category, action, item, property, world, miscellaneous]),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "pemain",
		label: "pemain",
		linkedList: true,
		directory: "pemain",
	},
};

// list

// prettier-ignore
export const tree: Tree = {
	title: player,
	twig: [
		character,
		category,
		action,
		item,
		property,
		world,
		miscellaneous
	],
};
