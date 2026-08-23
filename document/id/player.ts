import { Markdown, Tree, expandList } from "~d/type/markdownType";

// miscellaneous

export const language: Markdown = {
	title: "bahasa",
	summary: "Mengganti bahasa",
	options: {
		preset: "language",
	},
};

export const event: Markdown = {
	title: "acara",
	summary: "Sistem yang beroperasi pada waktu tertentu",
	options: {
		preset: "event",
		label: "event",
	},
};

export const miscellaneous: Markdown = {
	title: "informasi tambahan",
	summary: "Informasi tambahan lain yang dijelaskan.",
	children: { event: event, language: language },
	options: {
		preset: "miscellaneous",
		label: "miscellaneous",
	},
};

// world

export const debug: Markdown = {
	title: "debug",
	summary: "Operasi untuk pemeriksaan debugging",
	options: {
		preset: "debug",
	},
};

export const config: Markdown = {
	title: "konfigurasi",
	summary: "Mengubah konfigurasi permainan",
	options: {
		preset: "config",
	},
};

export const statistics: Markdown = {
	title: "statistik",
	summary: "Ringkasan kemajuan",
	options: {
		preset: "statistics",
	},
};

export const overview: Markdown = {
	title: "ringkasan",
	summary: "Tentang game ini.",
	options: {
		preset: "overview",
	},
};

export const world: Markdown = {
	title: "dunia",
	summary: "Anda dapat mengoperasikan dan memeriksa kontrol dan konfigurasi umum game,",
	children: { overview: overview, statistics: statistics, config: config, debug: debug },
	options: {
		preset: "world",
		label: "world",
	},
};

// property

export const correction: Markdown = {
	title: "Detail Properti",
	summary: "Perubahan nilai akibat peralatan atau item",
	options: {
		preset: "property",
	},
};

export const properties: Markdown = {
	title: "properti",
	summary: "プロパティの一覧",
	options: {
		preset: "properties",
	},
};

export const property: Markdown = {
	title: "properti",
	summary: "プロパティの確認",
	// properties / correction は label を持たない同ページ内の節なので、
	// 一覧表・リンクは作らず children の見出しとして展開する（item・action と同じ形）
	children: { properties: properties, correction: correction },
	options: {
		label: "property",
		preset: "property",
	},
};

// item

export const trade: Markdown = {
	title: "transaksi",
	summary: "Beli atau jual Item dalam mata uang.",
	options: {
		preset: "trade",
	},
};

export const items: Markdown = {
	title: "Item",
	summary: "カテゴリ内のアイテムの一覧",
	options: {
		preset: "items",
	},
};

export const item: Markdown = {
	title: "Item",
	summary: "Detail barang.",
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
	options: {
		preset: "act",
	},
};

export const actions: Markdown = {
	title: "Aksi.",
	summary: "カテゴリ内のアクションの一覧",
	options: {
		preset: "actions",
	},
};

export const action: Markdown = {
	title: "Aksi",
	summary: "Elemen bertindak seperti mengumpulkan, membuat, dan bertarung.",
	children: { actions: actions, act: act },
	options: {
		preset: "action",
		label: "action",
	},
};

// category

export const tasks: Markdown = {
	title: "Tugas",
	summary: "カテゴリ内のタスクの一覧",
	options: {
		preset: "tasks",
	},
};

export const category: Markdown = {
	title: "カテゴリ",
	summary: "Kompilasi berbagai elemen.",
	children: { tasks: tasks },
	options: {
		label: "category",
		preset: "category",
	},
};

// character
export const status: Markdown = {
	title: "status",
	summary: "Daftar semua properti",
	options: {
		preset: "status",
	},
};

export const inventory: Markdown = {
	title: "inventaris",
	summary: "Daftar semua Item",
	options: {
		preset: "inventory",
	},
};

export const activity: Markdown = {
	title: "aktivitas",
	summary: "Daftar semua aksi",
	options: {
		preset: "activity",
	},
};

export const missions: Markdown = {
	title: "Misi",
	summary: "Daftar semua tugas",
	options: {
		preset: "missions",
	},
};

export const character: Markdown = {
	title: "karakter",
	summary: "Identifikasi dan pengoperasian situasi protagonis.",
	children: { activity: activity, inventory: inventory, status: status, missions: missions },
	options: {
		label: "character",
		preset: "character",
	},
};

export const player: Markdown = {
	title: "pemain",
	summary: "Permainan dijelaskan untuk setiap kolom yang muncul di Play the Game.",
	points: ["Secara default, deskripsi yang sama muncul sebagai petunjuk di bawah setiap kolom.", "Petunjuk dapat disembunyikan dengan konfigurasi."],
	list: expandList("pemain", [character, category, action, item, property, world, miscellaneous], "Deskripsi"),
	// children: { character: character, category: category, action: action, item: item, property: property, world: world, miscellaneous: miscellaneous },
	options: {
		preset: "player",
		label: "player",
		linkedList: true,
		directory: "player",
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
