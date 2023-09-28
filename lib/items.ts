import { StaticImageData } from '#/node_modules/next/image';
import chart1 from '/public/charts/chart1.png';
import chart2 from '/public/charts/chart2.png';
import chart3 from '/public/charts/chart3.png';
import chart4 from '/public/charts/chart4.png';
import chart5 from '/public/charts/chart5.png';
import chart6 from '/public/charts/chart6.png';
import chart7 from '/public/charts/chart7.png';
import chart8 from '/public/charts/chart8.png';
import chart9 from '/public/charts/chart9.png';
import chart10 from '/public/charts/chart10.png';
import chart12 from '/public/charts/chart12.png';
import chart13 from '/public/charts/chart13.png';
import chart14 from '/public/charts/chart14.png';
import chart15 from '/public/charts/chart15.jpg';
import chart16 from '/public/charts/chart16.jpg';
import chart17 from '/public/charts/chart17.jpg';
import chart18 from '/public/charts/chart18.jpg';
import chart19 from '/public/charts/chart19.jpg';
import chart20 from '/public/charts/chart20.jpg';
import chart21 from '/public/charts/chart21.jpg';
import chart22 from '/public/charts/chart22.jpg';
import chart23 from '/public/charts/chart23.jpg';
import chart24 from '/public/charts/chart24.jpg';
import chart25 from '/public/charts/chart25.jpg';
import chart26 from '/public/charts/chart26.jpg';
import chart27 from '/public/charts/chart27.jpg';
import blank from '/public/charts/blank.png'


export type Item = {
  name: string;
  id: string;
  range: number | null;
  paragraphs?: string[];
  picture?: Picture[];
  links?: Links[]
  complexList?: ComplexList[]
};

type Picture = {
  url: StaticImageData;
  text?: string;
  firstSetOfParagraphs?: string[];
  firstSetOfList?: List[];
  secondSetOfParagraphs?: string[];
  secondSetOfList?: List[];
};

type List = {
  ul?: boolean;
  listItems: string[];
};

type Links = {
  url: string;
  text: string;
}

type ComplexList = {
  title: string;
  items: string[];
  afterParagraph?: string[]
}

// todo place these types into seprate file
export type ItemsList = {
  name: string;
  items: Item[];
  id: string;
};

export const items: ItemsList[] = [
  {
    name: 'CAPSMARK Story, Models & Future',
    id: 'story',
    items: [
      {
        name: '',
        id: 'capsmark-overview',
        range: null,
        paragraphs: [
          'Crafting and managing a cryptocurrency hedge fund equipped with an all-encompassing robo-advisory trading system is an intricate venture, harmonising financial acumen with the prowess of artificial intelligence.',
          'With nearly two years of operation under our belt, our cryptocurrency hedge fund showcases our experience in the field. Our portfolio features two funds, the "Signature Fund" and the "Deep-Alpha Fund, " designed to cater to different investor needs and market conditions.',
          `The "Signature Fund" is focused on low-risk strategies, emphasising Bitcoin (BTC). Its goal is to achieve a near-zero beta to reduce volatility and drawdown. Our main objective is to provide consistent returns, benchmarking against BTC's performance.`,
          `In contrast, the "Deep-Alpha Fund" takes on a higher risk, following a passive buy-and-hold approach. This fund aims to maintain a beta close to 1, hoping to benefit from bullish market trends. It uses Total2 (Altcoins) as its benchmark, offering investors exposure to alternative cryptocurrencies.`,
          `Both funds rely on our advanced quantitative algorithms, supported by current AI, and machine learning techniques. These algorithms process various data, including on-chain information, exchange metrics, and macroeconomic data. We carefully refine these data sources to monitor the cryptocurrency market closely, helping with thorough risk assessments and mitigation.`,
          `While our modus operandi echoes many peers in the hedge fund and asset management sphere, a defining hallmark sets us apart: our trust in artificial intelligence to helm tasks that traditionally challenge human capacities.`,
          `In our commitment to thorough validation, we compared our methodology to the benchmark of the S&P500, carefully removing features specific to Cryptocurrencies. Leveraging our expertise, we successfully refined our methodology to other key financial sectors, notably the stock market, using a decade's worth of data on the S&P 500. We've detailed these findings in the 'S&P 500 Multi-Transformers (Beta)' appendix. `,
          `These results mainly showcase how adaptable our methodology is. To achieve a confidence level similar to our models in the cryptocurrency realm, a dedicated team would need to engage in deep research for at least six months to produce a reliable version.`,
        ],
      },
    ],
  },
  {
    name: 'Signature Fund',
    id: 'signature',
    items: [
      {
        name: '',
        id: 'signature-overview',
        range: null,
        paragraphs: [
          `Let's look closer at our Signature Fund to understand its workings. Developing a complete robo-advisory trading system requires a solid grasp of the market. This means assessing risks, analyzing the behavior of major Bitcoin players, understanding crypto exchanges, and keeping track of key global economic factors and events.`,
        ],
        picture: [
          {
            url: chart9,
            text: `An overview of the datasets that the model uses for analysis at the time of completion.`,
          },
        ],
      },
      {
        name: 'Step 1.',
        id: 'signature-step-1',
        range: null,
        paragraphs: [
          `Bot1 measures the daily relative weight of Bitcoin holders (Exchanges, Miners, Whales) to Bitcoin’s total supply using a simple linear algorithm to calculate the selling power of each group and then passes it to Bot2.`,
          `Bot2 uses Bot1’s output as input alongside four other metrics (Historical Bitcoin price changes after each halving, historical price volatility, historical network’s hashrate and difficulty) to the Long Short Term Memory Neural Networks engine, which is responsible for capturing long-term dependencies between Bitcoin price data, it's fundamental events and estimating the level of reserved risk/reward based on Bitcoin’s historical cycles with supply-adjusted weights.`,
        ],
        picture: [
          {
            url: chart1,
            firstSetOfParagraphs: [
              `For instance, this is how Bot2 sees the last 2,000 days’ reserved risk of the market based on Bitcoin’s previous cycles:`,
            ],
          },
          {
            url: chart7,
            text: `The higher the values, the lower the reserved risk level is.`,
            firstSetOfParagraphs: [
              `Inside Bot3, which works in parallel with Bot1 and Bot2, are two AI engines in series. The first one benefits from a Gaussian Mixture Model, Graph Neural Networks and other techniques to cluster the Bitcoin holder’s wallets into our 36 desired clusters based on each wallet’s historical data and transactions using billions of data points. Then, our Ensemble AI Engine will do the rest to measure the real-time risk magnitude each cluster is bringing to the market.`,
            ],
          },
          {
            url: chart2,
            firstSetOfParagraphs: [
              `Bot4 operates in parallel with Bots 1, 2, and 3. However, all computation and clustering techniques focus on the Miners' Wallets data during this process. The objective is to measure the real-time risk magnitude for each of the six identified clusters within the mining sector and determine their impact on the market.`,
            ],
          },
          {
            url: chart3,
            firstSetOfParagraphs: [
              `Similarly, Bot5 works in tandem with other bots, concentrating on evaluating the risk magnitude arising from exchanges. This emphasis is crucial, as crypto exchanges hold significant sway over price fluctuations.`,
            ],
          },
          {
            url: chart4,
            firstSetOfParagraphs: [
              `With the reserved risk from each sector now accurately gauged, our advanced Hybrid RNN Engine steps in. It aggregates these risks, factoring in the weight assigned to each industry. This weight determination comes from thoroughly examining the sector's historical data and performance. Specifically, the engine carries out three critical tasks:`,
            ],
            firstSetOfList: [
              {
                listItems: [
                  `Predicting the magnitude of the forthcoming Pump/Dump,`,
                  `Estimating the duration of the next Pump/Dump, and`,
                  `Suggesting suitable position sizing based on the aggregated risk level of the current market situation.`,
                ],
              },
            ],
            secondSetOfParagraphs: [
              `The trio of recommendations, each paired with its occurrence probability, is relayed to a Trader or Asset Manager. This detailed insight equips the Asset Manager to effectively gauge and scrutinize the imminent reserved risk, especially those stemming from On-Chain activities and crypto exchanges, ensuring enhanced risk mitigation strategies are in place."`,
            ],
          },
          {
            url: chart5,
            firstSetOfParagraphs: [
              `To maintain and continuously improve robustness and precision, we've seamlessly integrated a Reinforcement Learning Agent. This agent bridges the gap between the RNN Engine's outputs and the initial weights assigned to each sector (W1, W2, W3, W4). Its primary role is to monitor discrepancies between the RNN Engine's forecasts and real-world results, enabling real-time fine-tuning of the RNN Engine and timely adjustments to the weights.`,
            ],
          },
          {
            url: chart6,
            firstSetOfParagraphs: [
              `Now, let’s see how the model can benefit a trader or any trading algorithm to help them measure the market’s reserved risk simultaneously, improving their performance and helping them make more accurate decisions.`,
              `As an illustration, we will opt for a straightforward trading strategy employing the Moving Average Convergence Divergence (MACD) indicator to exclusively generate sell signals. This strategy will be assessed over a five-year span, encompassing historical daily price data for Bitcoin from March 2018 to September 2023. Our aim is to enhance its efficacy through the utilization of our model as an observer of the signals generated by the strategy. We commence with an initial capital of $1,000 and implement a policy that restricts the strategy from allocating more than 50% of its capital to any single trade.`,
            ],
          },
        ],
      },
      {
        name: 'MACD strategy inputs:',
        id: 'signature-strategy',
        range: null,
        paragraphs: [`Fast Length: 12`, `Slow Length: 26`, `MACD Length: 9`],
        picture: [
          {
            url: chart15,
          },
          {
            url: chart16,
          },
        ],
      },
      {
        name: 'MACD:',
        id: 'signature-macd',
        range: null,
        paragraphs: [
          `{'Total ROI (%)': 9.90939133473705,`,
          ` 'Total PnL ($)': 99.09391334737052,`,
          ` 'Max Drawdown (%)': -41.97695365563481,`,
          ` 'Number of Trades': 71,`,
          ` 'Number of Profitable Trades': 25,`,
          ` 'Number of Losing Trades': 46,`,
          ` 'Winrate (%)': 35.2112676056338}`,
        ],
        picture: [
          {
            url: chart18
          },
          {
            url: chart17
          }
        ]
      },
      {
        name: 'MACD + Model:',
        id: 'signature-macd-model',
        range: null,
        paragraphs: [
          `{'Total ROI (%)': 138.86165416675317,`,
          ` 'Total PnL ($)': 1388.6165416675317,`,
          ` 'Max Drawdown (%)': '-5.8498766879112',`,
          ` 'Number of Trades': 48,`,
          ` 'Number of Profitable Trades': 29,`,
          ` 'Number of Losing Trades': 19,`,
          ` 'Winrate (%)': 60.416666666666664}`,
        ],
        picture: [
          {
            url: chart10,
            firstSetOfParagraphs: [
              `Upon examining the table above, it becomes evident that our engine has amplified the strategy’s ROI by a factor of 14X. Concurrently, there's a discernible decrement in the maximum drawdown by approximately 7X. Furthermore, there’s a contraction in the number of trades executed by nearly 30%, and the strategy's win rate has seen an enhancement by a magnitude of 1.7X.`,
              `Remarkably, these enhancements transpired without fully harnessing the model’s capabilities, such as Recommended Position Sizing or Pump/Dump Magnitude Estimation.`,
              `Instead, we capitalised on its real-time risk Measurement, establishing a threshold to sift through the generated signals and promptly conclude open positions upon the model's recognition of trend reversals. Notably, we implemented this approach solely for Short selling signals. We also did not subject the strategy to optimisation or hyperparameter tuning.`,
              `Please be aware: This involves straightforward backtesting under optimal conditions without accounting for fee reductions, funding fees, or price slippage. The strategy's backtesting on a daily interval somewhat diminishes the model’s precision, as it relies on intraday calculations to confirm its signals.`,
              `Future: Building on our foundational expertise, we have seamlessly incorporated eight AI engines dedicated to meticulously processing billions of data points. With our track record of relentless innovation, we envision the next phase encompassing comprehensive advancements to the engine. Our overarching ambition is to bolster its precision and broaden its applicability across various asset classes and market sectors.`,
            ]
          },
          {
            url: chart8
          }
        ]
      },
      {
        name: 'Signature Fund Performance Report',
        id: 'signature-performance-report',
        range: null,
        links: [
          {
            url:
              '/Signature_Fund_February_2023_April_2023_Performance_report_2.pdf',
            text: 'Report Example'
          },
          {
            url: 'https://capsmark.pages.dev/',
            text: 'Capsmark Dashboard'
          }
        ]
      },
      {
        name: 'Deep-Alpha Fund',
        id: 'deep-alpha',
        range: null,
        paragraphs: [
          `The Deep-Alpha Fund stands as Capsmark's pinnacle of high-risk investment vehicles. At its foundation, this fund intricately intertwines with the avant-garde TXFEE model, crafted to adeptly navigate the intricate nuances of the cryptocurrency market landscape. The foremost aspiration of Deep-Alpha is to mirror, with precision, the cryptocurrency market's trajectory during its bullish tenures, with an ambitious pursuit of a Beta nearing unity. It behoves potential investors to discern that, in stark contrast to Capsmark’s Signature Fund, the Deep-Alpha Fund bears a pronounced risk profile, with potential drawdowns that may eclipse 40%. Yet, in its essence, this fund is unyieldingly committed to amplifying profits amidst market ascents, positioning it as an alluring proposition for those investors with a penchant for robust returns in the mercurial domain of cryptocurrency.`,
        ],
        picture: [
          {
            url: chart13,
            firstSetOfParagraphs: [
              `The heatmap image above represents how TXFEE sees the Ethereum price’s reserved risk over time. (Red: Higher risk, Green: Lower risk)`,
            ]
          },
          {
            url: chart14,
            firstSetOfParagraphs: [
              `Given the TXFEE model, implementing a simple trading strategy using some RL and NN algorithms result in over 500% ROI within a 3-year interval executing only six trades.`,
            ]
          },
          {
            url: chart12,
          }
        ]
      },
    ],
  },
  {
    name: 'S&P500 Multi-Transformer (Beta)',
    id: 'multi-transformer',
    items: [
      {
        name: 'Design and Evaluation of a Multi-Transformer Trading System',
        id: 'multi-title',
        range: null,
      },
      {
        name: 'Introduction:',
        id: 'multi-introduction',
        range: null,
        paragraphs: [
          `In algorithmic trading, our pioneering system represents a paradigm shift. We've designed a multi-transformer trading system that harnesses the power of mathematical descriptors, technical indicators, and deep neural networks to predict asset prices and generate trading signals.`,
          `Problem Statement:`,
          `Financial markets are characterised by volatility, complexity, and the need for timely decision-making. Our system addresses these challenges by leveraging mathematical descriptors like the Fourier and Maclaurin series alongside a rich set of technical indicators and oscillators to make informed predictions.`,
          `Objectives:`
        ],
        picture: [
          {
            url: blank,
            firstSetOfList: [
              {
                ul: true,
                listItems: [
                  `Develop a robust and adaptable trading system capable of handling diverse assets.`,
                  `Achieve consistent profit generation while managing risk effectively.`,
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'System Architecture:',
        id: 'multi-architecture',
        range: null,
        paragraphs: [
          `At the core of our system lies a sophisticated architecture. We start by feeding mathematical describers and technical indicators into transformers. These transformers preprocess and enhance the data, enabling a deeper understanding of market dynamics. Subsequently, the transformed data flows into two deep neural network decision-maker systems that generate precise trading signals.`
        ]
      },
      {
        name: 'Data Collection:',
        id: 'multi-collection',
        range: null,
        paragraphs: [
          `Our system thrives on high-quality data. We meticulously collect data from various sources, ensuring accuracy and completeness. This data forms the lifeblood of our trading models, facilitating rigorous training and testing.`
        ]
      },
      {
        name: 'Mathematical Describers:',
        id: 'multi-describers',
        range: null,
        paragraphs: [
          `Fourier and Maclaurin series to serve as our mathematical describers. They unravel intricate patterns and behaviours within financial data, empowering our system to make sense of complex market movements.`
        ]
      },
      {
        name: 'Technical Indicators:',
        id: 'multi-indicators',
        range: null,
        paragraphs: [
          `Our arsenal includes an array of technical indicators and oscillators. These indicators provide crucial insights into market trends, volatility, and potential opportunities.`
        ]
      },
      {
        name: 'Transformers:',
        id: 'multi-transformers',
        range: null,
        paragraphs: [
          `The transformers play a pivotal role in data preprocessing. They enrich the data with relevant features, enabling our system to make well-informed predictions.`
        ]
      },
      {
        name: 'Deep Neural Networks:',
        id: 'multi-neural',
        range: null,
        paragraphs: [
          `The heart of our system, the deep neural network decision-makers, receive the transformed data. They analyse, learn, and rapidly generate trading signals, translating data-driven insights into profitable actions.`
        ]
      },
      {
        name: 'Training and Testing:',
        id: 'multi-testing',
        range: null,
        paragraphs: [
          `Our system undergoes rigorous training and testing phases to ensure robustness and reliability. These processes validate its performance in real-world trading scenarios.`
        ]
      },
      {
        name: 'Performance Results:',
        id: 'multi-results',
        range: null,
        paragraphs: [
          `During testing, our system demonstrated remarkable prowess, capturing approximately $3,600 in profit within the context of the S&P 500. This achievement is particularly impressive, considering the daily price fluctuation of nearly $7,000. Key metrics, including profit, drawdown, Sharpe ratio, and alpha/beta, underscore the system's prowess.`
        ]
      },
      {
        name: 'Adaptability and Generalization:',
        id: 'multi-adaptability',
        range: null,
        paragraphs: [
          `One of our system's standout features is its adaptability. It can seamlessly transition to different assets and markets, consistently delivering positive results. Its versatility makes it a valuable tool for investors and institutions seeking a competitive edge.`
        ]
      },
      {
        name: 'Conclusion:',
        id: 'multi-conclusion',
        range: null,
        paragraphs: [
          `The multi-transformer trading system redefines algorithmic trading. By melding mathematical descriptors, technical indicators, and deep neural networks, we've crafted a solution that offers adaptability and profitability in today's dynamic financial landscape.`
        ]
      },
      {
        name: 'Future Work:',
        id: 'multi-future',
        range: null,
        paragraphs: [
          `Our journey continues with the pursuit of excellence. Future work includes refining strategies, expanding adaptability, and exploring new frontiers in algorithmic trading.`
        ],
        picture: [
          {
            url: chart19
          },
          {
            url: chart20
          },
          {
            url: chart21,
            firstSetOfParagraphs: [
              `Maximum Drawdown: -0.0914196864`,
              `Sharpe Ratio: 4.396366447568421`,
              `Alpha: 10.254386591095681`,
              `Beta: 0.031041198471369467`,
            ]
          }
        ]
      },
    ],
  },
  {
    name: 'Quantitative Economics',
    id: 'quantitative-economics',
    items: [
      {
        name: 'CPI Forecasting Model:',
        id: 'eco-cpi',
        range: null,
      },
      {
        name: 'Description:',
        id: 'eco-description',
        range: null,
        paragraphs: [`Developed Gradient Boosting Regression model used for forecasting the Core Consumer Price Index (CPI). The model is trained on historical CPI data and attempts to predict future CPI values based on relevant features.`],
      },
      {
        name: 'Results:',
        id: 'eco-results',
        range: null,
        picture: [
          {
            url: chart22,
            firstSetOfParagraphs: [
              `The CPI forecasting model has proven to be highly successful in providing accurate and reliable forecasts for the Core Consumer Price Index. Not only has it demonstrated its ability to make precise predictions, but it has also yielded valuable insights through its feature importance analysis. By identifying and ranking the significance of each feature in the forecasting process, we gain a deeper understanding of the factors influencing CPI Fluctuations.`,
              `This model has undergone enhancements, including incorporating various features and a slightly modified approach.`,

            ]
          }
        ]
      },
      {
        name: 'Recession Prediction Model:',
        id: 'eco-prediction',
        range: null,
      },
      {
        name: 'Description:',
        id: 'eco-prediction-description',
        range: null,
        paragraphs: [`In this project, a state-of-the-art Long Short-Term Memory (LSTM) model was developed to predict and identify economic recessions accurately. The model was trained on a diverse set of economic metrics to capture the complex temporal patterns and dependencies present in economic data.`],
      },
      {
        name: 'Results:',
        id: 'eco-prediction-results',
        range: null,
        picture: [
          {
            url: chart23,
            firstSetOfParagraphs: [
              `The LSTM-based recession prediction model has demonstrated exceptional accuracy, and achieved a remarkable 98% success rate in forecasting economic recessions. Notably, it has outperformed existing methodologies commonly used in recession forecasting. By accurately capturing the intricate relationships within economic data, this research has the potential to provide invaluable insights into the dynamics of economic cycles and help stakeholders make well-informed decisions.`,
              `Please note that several refinements have been implemented in the model, including the utilisation of enhanced features and a shortened prediction horizon to ensure improved accuracy in results.`,
            ]
          }
        ],
      },
      {
        name: 'The CapsMark RateScope Index:',
        id: 'capsmark-ratescope-index',
        range: null,
        paragraphs: [
          `This index is a transparent and easily comprehensible tool for assessing the degree of risk linked to the Federal Reserve's interest rates. It achieves this by considering and analysing a range of treasury rates widely regarded as critical indicators within the financial market landscape.`,
          `To provide a bit more context, the Federal Reserve's interest rates play a pivotal role in the broader economy. These rates are the foundation upon which borrowing and lending costs are determined, influencing various facets of financial markets, from mortgage rates to corporate borrowing costs.`,
          `Now, as we delve deeper into the mechanics of this index, its colour-coded scale becomes particularly valuable. Moving towards the "red" end of the spectrum within this index is akin to sounding an alarm. It signifies an increasing level of concern and risk in relation to potential future Federal Reserve rate hikes.`,

        ],
        picture: [
          {
            url: chart24
          }
        ]
      },
      {
        name: 'Econometric Analysis of Federal Funds Rate Movements',
        id: 'econometric-analysis',
        range: null,
        paragraphs: [
          `Our polynomial logistic regression model examines the influence of econometric factors on Federal Reserve interest rate decisions. By analysing historical data and the interplay of economic indicators, we aim to uncover patterns that can help us understand how econometric changes impact the Federal Reserve's interest rate policy choices. This model is valuable for providing insights into the drivers behind monetary policy decisions and their potential implications for the economy, financial markets, and various stakeholders.`
        ],
        picture: [
          {
            url: chart25
          },
          {
            url: chart26
          }
        ]
      },
      {
        name: 'Identifying U.S. Movements in Bitcoin',
        id: 'us-btc',
        range: null,
        paragraphs: [
          `Our advanced statistical model, utilising the Coinbase Premium Index, has been meticulously developed to track Bitcoin price movements within the United States. Analysing historical data and employing cutting-edge statistical techniques can pinpoint fluctuations in U.S. Bitcoin prices compared to the global market. This model offers valuable insights to investors, regulators, and researchers, enhancing their ability to make informed decisions and understand the cryptocurrency market dynamics.`
        ],
        picture: [
          {
            url: chart27,
            firstSetOfList: [
              {
                listItems: [
                  `Vertical lines indicate FOMC meetings`,
                  `Green dots indicate buying pressure from the U.S.`,
                  `Blue dots indicate selling pressure from the U.S.`,
                  `Red dots indicate non-U.S. price fluctuations`,
                ]
              }
            ]
          }
        ]
      }
    ],
  },
  {
    name: 'Future Vision',
    id: 'future-vision',
    items: [
      {
        name: '',
        id: 'future-overview',
        range: null,
        paragraphs: [
          `Our forward-looking strategy encompasses several dimensions:`
        ],
        complexList: [
          {
            title: 'Model Enhancements:',
            items: [
              `Our ambition extends beyond the present, as we aim to pioneer fully automated robo-advisory asset management. The envisioned 'bot of bots' will dynamically rebalance and manage assets, making decisions grounded in the track records of diverse models.`
            ]
          },
          {
            title: 'Augmenting Analytical and Predictive Capacities:',
            items: [
              `We're poised to harness the capabilities of Generative AIs, Transformers, and Large Language Models (LLMs). This integration addresses the current models' sentiment analysis and macroeconomic event interpretation limitations.`,
              `Recognising the ever-increasing complexity of financial data, our commitment is to further our models' reach. Yet, the more intricate the problems, the greater the computational demand. Traditional computing mechanisms have their constraints. Thus, we are setting our sights on the quantum frontier. Leveraging the unparalleled processing prowess of quantum mechanics, which allows for simultaneous multi-state computations, we anticipate tasks that traditionally take millennia to be executable within mere moments.`
            ]
          },
          {
            title: 'Diversification into Other Sectors:',
            items: [
              `While details remain under strategic evaluation, our expansionary aspirations extend to multiple market segments and industries.`
            ],
            afterParagraph: [
              `This blueprint reflects our ambitions and our unwavering dedication to innovation and excellence.`
            ]
          }
        ]
      },

    ],
  },
]

