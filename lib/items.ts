import { StaticImageData } from '#/node_modules/next/image';
import chart1 from '/public/charts/chart1.png';
import chart2 from '/public/charts/chart2.png';
import chart3 from '/public/charts/chart3.png';
import chart4 from '/public/charts/chart4.png';
import chart5 from '/public/charts/chart5.png';
import chart6 from '/public/charts/chart6.png';
import chart7 from '/public/charts/chart7.png';
import chart9 from '/public/charts/chart9.png';

export type Item = {
  name: string;
  id: string;
  range: number | null;
  paragraphs?: string[];
  picture?: Picture[];
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
            url: chart7,
          },
        ],
      },
    ],
  },
  {
    name: 'S&P500 Multi-Transformer (Beta)',
    id: 'multi-transformer',
    items: [],
  },
  {
    name: 'Quantitative Economics',
    id: 'quantitative-economics',
    items: [],
  },
  {
    name: 'Future Vision',
    id: 'future-vision',
    items: [],
  },
];
