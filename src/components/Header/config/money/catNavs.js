const catNavs = [
  {
    name: 'BankService',
    url: 'http://www.cnyes.com/money/BankService.aspx?ga=nav',
    title: '銀行服務',
    external: true,
    subItems: [
      {
        name: 'PublicRate',
        url: 'http://www.cnyes.com/money/PublicRate.htm?ga=nav',
        title: '牌告利率',
        external: true,
      },
      {
        name: 'ValutaDepositRate',
        url: 'http://www.cnyes.com/money/ValutaDepositRate.htm?ga=nav',
        title: '外幣存款利率',
        external: true,
      },
      {
        name: 'DepositRate',
        url: 'http://www.cnyes.com/money/DepositRate.htm?ga=nav',
        title: '存款利率',
        external: true,
      },
      {
        name: 'UsuryRate',
        url: 'http://www.cnyes.com/money/UsuryRate.htm?ga=nav',
        title: '放款利率',
        external: true,
      },
      {
        name: 'BankMoneyExchange',
        url: 'http://www.cnyes.com/money/BankMoneyExchange.htm?ga=nav',
        title: '銀行換匯',
        external: true,
      },
      {
        name: 'BankMoneyExchangeCompareTable',
        url: 'http://www.cnyes.com/money/BankMoneyExchangeCompareTable.htm?ga=nav',
        title: '銀行換匯比較表',
        external: true,
      },
    ],
  },
  {
    name: 'mortgage_index',
    url: 'http://www.cnyes.com/mortgage/?ga=nav',
    title: '房貸',
    external: true,
    subItems: [
      {
        name: 'mortgage_search',
        url: 'http://www.cnyes.com/mortgage/search.aspx?ga=nav',
        title: '房貸搜尋',
        external: true,
      },
      {
        name: 'mortgage',
        url: 'http://www.cnyes.com/mortgage/news.aspx?ga=nav',
        title: '新聞&分析',
        external: true,
      },
      {
        name: 'calculation',
        url: 'http://www.cnyes.com/mortgage/calculation/monthly_payment.aspx?ga=nav',
        title: '房貸計算',
        external: true,
      },
      {
        name: 'average_rate',
        url: 'http://www.cnyes.com/mortgage/data/average_rate/index.htm?ga=nav',
        title: '數據統計',
        external: true,
      },
      {
        name: 'buy_a_home',
        url: 'http://www.cnyes.com/mortgage/QA/buy_a_home.aspx?ga=nav',
        title: '常見問答',
        external: true,
      },
      {
        name: 'government_mof',
        url: 'http://www.cnyes.com/mortgage/government_mof?ga=nav',
        title: '政府專案',
        external: true,
      },
    ],
  },
  {
    name: 'fundptcalcu_index',
    url: 'http://www.cnyes.com/money/fundptcalcu.aspx?ga=nav',
    title: '投資分析',
    external: true,
    subItems: [
      {
        name: 'fundptcalcu',
        url: 'http://www.cnyes.com/money/fundptcalcu.aspx?ga=nav',
        title: '基金試算',
        external: true,
      },
      {
        name: 'investmentRisk',
        url: 'http://www.cnyes.com/money/investmentRisk.aspx?ga=nav',
        title: '投資屬性分析',
        external: true,
      },
      {
        name: 'fund',
        url: 'https://fund.cnyes.com/',
        title: '基金',
        external: true,
      },
    ],
  },
  {
    name: 'livelihoodPrice',
    url: 'http://www.cnyes.com/money/livelihoodPrice.htm?ga=nav',
    title: '民生物價',
    external: true,
  },
  {
    name: 'StockQ',
    url: 'BankCalculation://www.cnyes.com/money/BankCalculation.aspx?ga=nav',
    title: '試算工具',
    external: true,
  },
  {
    name: 'tw_money',
    url: 'https://news.cnyes.com/news/cat/tw_money',
    title: '理財新聞',
    external: true,
  },
  {
    name: 'financial',
    url: 'http://mag.cnyes.com/Column/financial/index.shtml?ga=nav',
    title: '裡財雜誌',
    external: true,
  },
  {
    name: 'fixedincome_index',
    url: 'http://www.cnyes.com/fixedincome/Index.htm?ga=nav',
    title: '固定收益',
    external: true,
    subItems: [
      {
        name: 'securitiesYield_currentYield',
        url: 'http://www.cnyes.com/fixedincome/Page/securitiesYield_currentYield.aspx?ga=nav',
        title: '股票殖利率',
        external: true,
      },
      {
        name: 'fixedFund',
        url: 'http://www.cnyes.com/fixedincome/Page/fixedFund.htm?ga=nav',
        title: '固定收益基金',
        external: true,
      },
      {
        name: 'Etf_Screener',
        url: 'http://www.cnyes.com/fixedincome/Page/Etf_Screener.htm?ga=nav',
        title: '固定收益ETF',
        external: true,
      },
      {
        name: 'bankDeposit',
        url: 'http://www.cnyes.com/fixedincome/Page/bankDeposit.aspx?ga=nav',
        title: '銀行存款',
        external: true,
      },
      {
        name: 'Bond',
        url: 'http://www.cnyes.com/fixedincome/Page/Bond.htm?ga=nav',
        title: '債券',
        external: true,
      },
      {
        name: 'Resl',
        url: 'http://www.cnyes.com/fixedincome/Page/Resl.htm?ga=nav',
        title: '不動產證券化',
        external: true,
      },
      {
        name: 'astock',
        url: 'http://www.cnyes.com/astock/',
        title: '人民幣',
        external: true,
      },
      {
        name: 'tax',
        url: 'http://www.cnyes.com/fixedincome/Page/tax.htm?ga=nav',
        title: '相關稅務',
        external: true,
      },
      {
        name: 'AllCompare',
        url: 'http://www.cnyes.com/fixedincome/Page/AllCompare.htm?ga=nav',
        title: '商品比較',
        external: true,
      },
    ],
  },
  {
    name: 'insurance_index',
    url: 'http://www.cnyes.com/insurance/index.htm?ga=nav',
    title: '保險',
    external: true,
    subItems: [
      {
        name: 'insurance1',
        url: 'http://www.cnyes.com/insurance/index.htm?ga=nav',
        title: '保險理財',
        external: true,
      },
      {
        name: 'insure_product',
        url: 'http://www.cnyes.com/insurance/insure_product.aspx?ga=nav',
        title: '保險商品',
        external: true,
      },
      {
        name: 'insurance',
        url: 'http://www.cnyes.com/insurance/',
        title: '保險趨勢',
        external: true,
      },
      {
        name: 'insure_plan',
        url: 'http://www.cnyes.com/insurance/insure_plan.aspx?ga=nav',
        title: '保險規劃',
        external: true,
      },
      {
        name: 'insure_sheet11',
        url: 'http://www.cnyes.com/insurance/insure_sheet11.aspx?ga=nav',
        title: '試算系統',
        external: true,
      },
      {
        name: 'insure_course',
        url: 'http://www.cnyes.com/insurance/insure_course.aspx?ga=nav',
        title: '投保流程',
        external: true,
      },
      {
        name: 'insure_function',
        url: 'http://www.cnyes.com/insurance/insure_function.aspx?ga=nav',
        title: '保險功能',
        external: true,
      },
      {
        name: 'insure_inquiry',
        url: 'http://www.cnyes.com/insurance/insure_inquiry.aspx?ga=nav',
        title: '資訊專區',
        external: true,
      },
    ],
  },
  {
    name: 'insurance_index1',
    url: 'http://www.cnyes.com/insurance/index.htm?ga=nav',
    title: '租賃',
    external: true,
    subItems: [
      {
        name: 'introduction',
        url: 'http://www.cnyes.com/leases/introduction.aspx?ga=nav',
        title: '租賃介紹',
        external: true,
      },
      {
        name: 'news',
        url: 'http://www.cnyes.com/leases/news.aspx?ga=nav',
        title: '租賃新聞',
        external: true,
      },
      {
        name: 'financial',
        url: 'http://www.cnyes.com/leases/financial.aspx?ga=nav',
        title: '金融租賃',
        external: true,
      },
      {
        name: 'car_lease',
        url: 'http://www.cnyes.com/leases/car_lease.aspx?ga=nav',
        title: '汽車租賃',
        external: true,
      },
      {
        name: 'tool_lease',
        url: 'http://www.cnyes.com/leases/tool_lease.aspx?ga=nav',
        title: '機具租賃',
        external: true,
      },
      {
        name: 'situation',
        url: 'http://www.cnyes.com/leases/situation.aspx?ga=nav',
        title: '租賃趨勢',
        external: true,
      },
      {
        name: 'accounting',
        url: 'http://www.cnyes.com/leases/accounting.aspx?ga=nav',
        title: '租賃會計',
        external: true,
      },
      {
        name: 'lease_law',
        url: 'http://www.cnyes.com/leases/lease_law.aspx?ga=nav',
        title: '租賃法規',
        external: true,
      },
      {
        name: 'encyclopedia',
        url: 'http://www.cnyes.com/leases/encyclopedia.aspx?ga=nav',
        title: '租賃百科',
        external: true,
      },
    ],
  },
  {
    name: 'GlobalStock',
    url: 'http://www.cnyes.com/globalinvest/GlobalStock.htm?ga=nav',
    title: '股市地圖',
    external: true,
  },
];

export default catNavs;
