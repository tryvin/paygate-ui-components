export default [
	{
		title: 'Principal',
		icon: 'bolt',
		items: [
			{ linkTo: '/', title: 'Painel', icon: 'tachometer-alt' },
			{ linkTo: '/plans', title: 'Meu Plano', icon: 'bolt' },
			{ linkTo: '/plans', title: 'Calendário', icon: 'bolt' },
			{ linkTo: '/plans', title: 'Relatórios', icon: 'bolt' },
			{ linkTo: '/plans', title: 'Usuários', icon: 'bolt' },
			{ linkTo: '/plans', title: 'Arquivos', icon: 'bolt' },
			{ linkTo: '/plans', title: 'Configurações', icon: 'bolt' },
			{ linkTo: '/plans', title: 'Sair', icon: 'bolt' },
		],
	},
	{
		title: 'Financeiro',
		icon: 'chart-bar',
		items: [
			{ linkTo: '/finances', title: 'Principal', icon: 'chart-bar' },
			{ linkTo: '/finances/receipts', title: 'Recibos', icon: 'balance-scale-left' },
			{ linkTo: '/finances/bank-accounts', title: 'Contas Bancárias', icon: 'dollar-sign' },
			{ linkTo: '/finances/categories', title: 'Categorias', icon: 'sort' },
		],
	},
	{
		title: 'Caixa',
		icon: 'chart-bar',
		items: [
			{ linkTo: '/finances', title: 'Principal', icon: 'chart-bar' },
			{ linkTo: '/finances/receipts', title: 'Relatórios', icon: 'balance-scale-left' },
			{ linkTo: '/finances/receipts', title: 'Vender', icon: 'balance-scale-left' },
			{ linkTo: '/finances/bank-accounts', title: 'Produtos', icon: 'dollar-sign' },
			{ linkTo: '/finances/categories', title: 'Estoque', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Formas de Pagamento', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Relatórios', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Vendedores de Caixa', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Impostos', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Vendedores', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Vendas Self-Service', icon: 'sort' },
			{ linkTo: '/finances/categories', title: 'Nota Fiscal Eletrônica', icon: 'sort' },
		],
	},
	{
		title: 'Pessoas',
		icon: 'chart-bar',
		items: [
			{ linkTo: '/finances', title: 'Principal', icon: 'chart-bar' },
			{ linkTo: '/finances/receipts', title: 'Adicionar', icon: 'balance-scale-left' },
			{ linkTo: '/finances/bank-accounts', title: 'Lixeira', icon: 'dollar-sign' },
		],
	},
	{
		title: 'Orçamentos',
		icon: 'chart-bar',
		items: [
			{ linkTo: '/finances', title: 'Principal', icon: 'chart-bar' },
			{ linkTo: '/finances/receipts', title: 'Adicionar', icon: 'balance-scale-left' },
			{ linkTo: '/finances/bank-accounts', title: 'Faturas', icon: 'dollar-sign' },
		],
	},
];
