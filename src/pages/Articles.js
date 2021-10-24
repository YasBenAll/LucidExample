import React, { useRef, useState } from "react"
import { Button, Container, Row, Col, NavLink, NavItem, UncontrolledTooltip } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { db } from "../firebase";

export default function About() {

    return (
      <motion.div exit={{ opacity: 0 }}>
        <br />
        <br />
        <Container className="justify-content-center">
          <Row>
              <Col>
              <div id="images" class="text-center"> 
                  <img 
                    alt="Palantir"
                    width = "200px"
                    margin-top = "400px"
                    className=""
                    src={require("assets/img/palantir.jpeg").default}
                  ></img>
              </div>
              </Col>
          </Row>
          <Row>
            <Col>
            <div >
              <h2 class="title">
                  Palantir Stock ($PLTR) should not be overlooked…
              </h2>
              <h5 class="">
                  october 25 2021
              </h5>
              <p class = "" >
              This company has been on my radar ever since it IPO’d through a direct listing back in September of 2020. Back then Palantir stock was not at all popular. Most news outlets like CNBC were incredibly bearish on the company and had $5 price targets due to their unique corporate governance.
              I was one of the few people who saw the potential of this company and, consquently, I was one of the few people on Youtube covering this stock. Co-founded by the legendary Peter Thiel and CEO Alexander Karp, and growing at an almost 50% growth rate, Palantir was looking like an interesting prospect. 
              At the time I had dived into their fundamentals and could not find a reason to be bearish on the stock. They had been growing at a steady rate for years, gathering government contracts left and right with their unique software technology products; Foundry, Gotham & Apollo. 
              Palantir stock IPO’d at a price of around $10 at the time, which many news outlets reported as being an overvaluation because of the relatively high price-to-sales ratio of 20 and the unique corporate governance. What I found to be weird was that almost everybody was negative on Palantir stock, yet the fundamentals, including the guidance for the year ahead, were positive. 
              I bought a bunch of stock at $10 and more as it fell to $9 on the news that there was going to be a lock-up expiration because of the fact that Palantir stock direct listed many institutions, and hedge funds had not bought in yet. This meant that if there was a positive catalyst for the stock they would be left out of the momentum, as they did not have significant positions in Palantir. 
              So then it happened; Palantir started getting new contracts and the news got released on several media outlets. With the relatively low institutional ownership of Palantir and the positive catalyst being a trigger, the stock started shooting up to around $14 where I sold most of my stock for a lofty 40% profit.
              Of course since then the stock has rallied during the whole Wallstreetbets hype cycle rising all the way up to an all time high of $45. It has also gotten butchered several times because of the 10 year treasury skyrocketing, essentially bleeding out all the way to $16 a share for an all time low. 
              Ultimately the stock has been trading mostly around the lower $20 range with ups and downs from time to time. A lot has happened, from Lock-up periods expiring to Palantir being awarded many, many contracts during the pandemic and growing faster and faster with margins improving and costs decreasing relative to the revenue growth. Yet the stock price is still sitting in the lower $20 range which it has been hoovering around since the beginning of the year 2021.
Today Palantir stock is priced at $23.91 per share and has gone down from $29 a stock because of the stock market going down, potential dilution fears and on the news that the CEO of the company -Alexander Karp- is selling more than $40M+ worth of shares due to taxation reasons. Palantir earned roughly $1.1b in FY 2020 and grew its revenues at a pace of 47%, giving guidance of 30%+ for FY 2021. Then came Q1 of 2021 and Palantir reported revenues of $341M+, growing at 49% YoY, much faster than was projected. In Q2 of 2021 the same thing happened surprising everybody as most analysts were expecting revenues of $360M and Palantir reported $376M+, growing at 49% YoY, yet again blowing people's minds and expectations. We have also gotten massive contracts like the $800m+ long-term army contract and the $90M contract just weeks ago showcasing the popularity of Palantir’s software among institutions. Since Q2 Earnings the stock managed to rally from the lower $20’s until $29, but fell back down to the lower $20’s due to negative news recently, but leaving the phenomenal fundamentals unscathed. 
Looking at the technicals for Palantir on the 4-hour time-frame it is a big mess with the volumes going down fast and MACD potentially crossing downwards as well. This makes me think that Palantir stock is most likely consolidating at the $23 - $24 range for the coming days. The daily time-frame is looking a lot better; Palantir is holding the trend-line inside of the bullish channel that has existed since May. MACD’s looking like it is going to cross upwards in the next weeks with earnings coming up next month and the stock market most likely rebounding. It seems like Palantir is going to be rallying to the next resistence area around $25 - $26 by the end of October and potentially to around $27 - $29 for Q3 of FY2021. If Palantir performs as amazingly as it did in Q2 and Q1 of this year than it does seem like the stock could very well be headed to $31.5+ filling the gap.
Palantir has been trading in the lower $20 range for quite some time now, yet the fundamentals have been improving. Some of the reasons that the stock has been relatively flat is due to the 10Y rising substantially this year and the forced insider selling that has been happening. Yet I believe that Palantir stock will see better times. Revenue growth has been skyrocketing, margins are improving, contracts have been coming around and Palantir is increasing its software portfolio. My short-term target for Palantir for the next two weeks would be $26 and I think by Q3 earnings we could be seeing the $29 if the stock market is on our side. Longer-term I believe we could hit $31.5+ for Q4 of 2021 & beyond.
              </p>

            </div>
            </Col>
          </Row>
        </Container>

      </motion.div>
      );    
}