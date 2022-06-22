/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Layout from '../components/homeLayout'
import CustomButton01 from '../components/customButton01';
import Badge from '../components/badge';
import Message from '../components/message';
import Card from '../components/card';
import BigCard from '../components/bigCard';
import BigCardTop from '../components/bigCardTop';
import BigCardBottom from '../components/bigCardBottom';
import LineSpace from '../components/lineSpace';
import ExampleCard from '../components/exampleCard';
import BenefitCard from '../components/benefitCard';
import SmallCard from '../components/smallCard';
import VoiceCard from '../components/voiceCard';
import { ClarityScript } from '../components/ClarityScript'
import Script from "next/script";

const sectionLogo = '../img/top/img01.png'
const phone = '../img/top/img02.png'
const user01 = '../img/top/user01.png'
const user02 = '../img/top/user02.png'
const user03 = '../img/top/user03.png'
const lineArrow = '../img/top/line_arrow.png'
const img03_01 = '../img/top/img03_01.png'
const img03_02 = '../img/top/img03_02.png'
const img03_03 = '../img/top/img03_03.png'
const sec04_01 = '../img/top/sec04-01.png'
const sec04_02 = '../img/top/sec04-02.png'
const sec05logo = '../img/top/sec04_logo.png'
const sec05_01 = '../img/top/sec05_01.png'
const scan = '../img/top/scan.png'
const go = '../img/top/go.png'
const pay = '../img/top/pay.png'
const sectionMark = '../img/top/mark.png'
const checkmark = '../img/top/check.png'
const badge01 = '../img/top/intro01.png'
const badge02 = '../img/top/intro02.png'
const badge01_sp = '../img/top/intro01_sp.png'
const badge02_sp = '../img/top/intro02_sp.png'
const badge = '../img/top/badge.svg'
const badgeSP = '../img/top/badge.png'
const image40 = '../img/top/image40.png'
const image41 = '../img/top/image41.png'
const image42 = '../img/top/image42.png'
const sec07_logo = '../img/top/sec07_logo.png'
const sec08_img01 = '../img/top/sec08_img01.png'
const sec08_img01_sp = '../img/top/sec08_img01_sp.png'
const benefit01 = '../img/top/benefit01.svg'
const benefit02 = '../img/top/benefit02.svg'
const benefit03 = '../img/top/benefit03.svg'
const benefit04 = '../img/top/benefit04.svg'
const benefit01_main = '../img/top/benefit01_main.png'
const benefit02_main = '../img/top/benefit02_main.png'
const benefit03_main = '../img/top/benefit03_main.png'
const benefit04_main = '../img/top/benefit04_main.png'
const sec10_mark = '../img/top/sec10_mark.png'
const sec10_mark_sp = '../img/top/sec10_mark_sp.png'
const icon_01 = '../img/top/icon_01.png'
const icon_02 = '../img/top/icon_02.png'
const icon_credit = '../img/top/icon_credit.png'
const icon_pay = '../img/top/icon_pay.png'
const icon_yen = '../img/top/icon_yen.png'
const sec10_02 = '../img/top/sec10_02.png'
const sec10_03 = '../img/top/sec10_03.png'
const sec10_04 = '../img/top/sec10_04.svg'
const sec11_arrow = '../img/top/sec11_arrow.png'
const lastimg = '../img/top/lastimg.png'
const lastimg01 = '../img/top/lastimg01.png'
const lastimg02 = '../img/top/lastimg02.png'
const sec11_badge = '../img/top/sec11_badge.svg'
const sec11_badge2 = '../img/top/sec11_badge2.svg'
const sec11_badge3 = '../img/top/sec11_badge3.svg'

const intro_video = '../video/mv_movie.mp4'


export default function Home() {

  const onclickHandler = () => {
    console.log("Hi")
  }

  return (
    <div className={styles.container}>
      <ClarityScript />
      <Script strategy="lazyOnload" async src="https://www.googletagmanager.com/gtag/js?id=G-C4HHNLDYT5"></Script>
      <Script strategy="lazyOnload" id="googleTag">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C4HHNLDYT5');
              `
        }
      </Script>
      <Head>
        <title>qlub</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout lineText="＼qlubは飲食店さまを応援します／">
        <section className={styles.sec01}>
          <div className='container'>
            <div className={styles.section01}>
              <div>
                <div className='topfirstbtn'>
                  {/* <CustomButton01 name={<>QRコード決済のqlub導入を<br className='max_1200'/>検討中のオーナー様へ</>} className="customBtn02 fit"/> */}
                  <CustomButton01 name={<>飲食店舗オーナー・店長さまへ</>} className="customBtn02 fit" />
                </div>
                <div className={styles.imageLogo}>
                  <img
                    src={sectionLogo}
                    alt="sectionLogo"
                  />
                </div>
              </div>
              <div className={styles.phoneImg}>
                <img
                  src={phone}
                  alt="phone"
                />
              </div>
              <div className={styles.priceQr}>
                <div className={styles.number}>
                  <p>0</p>
                  <p>円<span>から</span>導入出来る！</p>
                </div>
                <div className={styles.qr}>
                  <p>QRコード決済のqlubでセルフ会計</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec02}>
          <div className='container'>
            <div className='mg-auto pt-110 sp_w_100'>
              <Badge className="badge-sm" name="飲食店のオーナーさま" />
            </div>
            <div>
              <h2>こんなお悩みありませんか？</h2>
            </div>
            <div className={styles.messageList}>
              <div>
                <Message image={user01}>
                  <label>
                    お会計作業を<br />
                    負担に感じている・・・
                  </label>
                </Message>
              </div>
              <div>
                <Message image={user02}>
                  <label>
                    お会計に追われず、<br />
                    注文や接客に集中したい
                  </label>
                </Message>
              </div>
              <div>
                <Message image={user03}>
                  <label>
                    非接触の<br />
                    ニーズに応えたい
                  </label>
                </Message>
              </div>
            </div>
            <div className='flex-cc mt-60'>
              <img
                src={lineArrow}
                alt="Arrow"
              />
            </div>
            <div className='flex-cc mt-40'>
              <div className={styles.gray_opacity_card}>
                <p>POSレジとのリアルタイム連携で</p>
                <h4>飲食店経営の課題を解決！</h4>
                <p>海外の飲食店様にも<br className='sp' />ご導入いただいています</p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec03}>
          <div className='container'>
            <div className={styles.sec03_cont}>
              <div className='mg-auto'>
                <h5 className='pc'>・・・・・・・</h5>
                <h5 className='pc'>セルフ会計の導入で経営課題も解決</h5>
                <h5 className='sp'>セルフ会計の導入で <br />
                  ・・・・・・・<br />
                  経営課題も解決</h5>
              </div>
              <div className={styles.sec03_cards}>
                <Card cardTitle="スムーズなお会計" image={img03_01}>
                  <p>スタッフが伝票を取り<br />レジでお会計処理を<br />行う必要がない</p>
                </Card>
                <Card cardTitle="お店の売上アップ" image={img03_02}>
                  <p>「お店を応援する」<br />チップ機能で増収益！<br />新たな収益も期待できる</p>
                </Card>
                <Card cardTitle="人件費の削減" image={img03_03}>
                  <p>お会計のやり取りが省略され<br />スタッフのレジ回り<br />業務が軽減！</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec04}>
          <div className='comon-container'>
            <div className={styles.header}>
              <h4>さまざまな飲食店のオーナーさま<label>に</label></h4>
              <p>ご利用されています</p>
            </div>
            <div className='mt-140 bigcards'>
              <BigCard
                image={sec04_01}
                markTitle="飲食店A様のお悩み"
                topChild={
                  <BigCardTop>
                    <p>
                      アフターコロナにおいて、<br />感染防止という観点で、お客様との接客が不安
                    </p>
                  </BigCardTop>
                }
                bottomChild={
                  <BigCardBottom>
                    <p>
                      テーブルでスマートフォンにより会計！店員とお客様の<br className='pc' />
                      接触を最低限に抑えられます。<span>注文や接客に集中し、<br className='pc' />
                        店舗オペレーションの効率化、売上の向上も見込めます。</span>
                    </p>
                  </BigCardBottom>
                }
              />
              <BigCard
                image={sec04_02}
                markTitle="飲食店B様のお悩み"
                topChild={
                  <BigCardTop>
                    <p>
                      忙しい時間帯はお会計業務や接客に忙しく、<br />お客さまを待たせてしまうことも
                    </p>
                  </BigCardTop>
                }
                bottomChild={
                  <BigCardBottom>
                    <p>
                      QRコードを使ってセルフ会計機能を導入することで、お会計の待ち時間を解消。
                      <span>お客さまを待たせることなく、混雑時の行列解決にもなったので、顧客満足度もアップ！</span>
                    </p>
                  </BigCardBottom>
                }
              />
            </div>
          </div>
        </section>
        <section className={styles.sec05}>
          <div className='comon-container'>
            <div className={styles.sec05content_header}>
              <div>
                <div>
                  <img src={sec05logo} alt="LOGO" />
                </div>
                <p>とは</p>
              </div>
            </div>
            <div className={styles.sec05content_body}>
              <h3>お客様が着席したまま <br />
                QRコードで簡単に<br className='sp' />セルフ会計ができます</h3>
              <div className={styles.maincont}>
                <div className='image_wrap'>
                  <img src={sec05_01} alt="iphone" />
                </div>
                <div className={styles.scangopay}>
                  <div>
                    <div>
                      <img src={scan} alt="scan" />
                    </div>
                    <p>テーブルに設置してあるQRコードを読み取る</p>
                  </div>
                  <div>
                    <div>
                      <img src={pay} alt="pay" />
                    </div>
                    <p>注文内容と金額を確認して、そのままお支払い<br className='pc' />
                      (金額の入力等は不要)</p>
                  </div>
                  <div>
                    <div>
                      <img src={go} alt="go" />
                    </div>
                    <p>支払い完了画面を確認してお会計終了。最短10秒!</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.contactBtn}>
              <p className='mg-auto'>＼導入費用0円！専用端末不要／</p>
              <div className='flex-cc mt-15'>
                <Link href='/contactus' passHref >
                  <div><CustomButton01 name="資料請求する" className="customBtn01 large" /></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec06}>
          <LineSpace className="sectionSpace" title="改善実績" />
          <div className='comon-container'>
            <div className='mg-auto mt-80'>
              <img src={sectionMark} alt="＼ 　　　　   の導入で ／" />
            </div>
            <div className='mt-140'>
              <div>
                <ExampleCard
                  header={
                    <h3>人件費<br /><span>20</span>%削減</h3>
                  }
                  checklist={
                    <>
                      <div>
                        <img src={checkmark} alt="check mark" />
                        <label>店舗スタッフのレジ往復がゼロ</label>
                      </div>
                      <div>
                        <img src={checkmark} alt="check mark" />
                        <label>会計業務は確認のみ</label>
                      </div>
                    </>
                  }
                  texts={
                    <>
                      <p>お客様がテーブルでセルフ会計が可能な為、会計業務が解消され、<br />
                        店舗スタッフは会計に伴うレジへの往復が無くなり、業務効率の向上が図れます
                      </p>
                    </>
                  }
                  image={badge01}
                  spimage={badge01_sp}
                />
              </div>

              <div className='mt-124'>
                <ExampleCard
                  header={
                    <h3>滞在時間平均<br /><span>16</span>分削減</h3>
                  }
                  checklist={
                    <>
                      <div>
                        <img src={checkmark} alt="check mark" />
                        <label>回転率の向上</label>
                      </div>
                      <div>
                        <img src={checkmark} alt="check mark" />
                        <label>ストレスの無いお会計で、顧客満足度も向上</label>
                      </div>
                    </>
                  }
                  texts={
                    <>
                      <p>
                        テーブルに設置してあるQRコードを読み取っていただきお会計が完了<br />
                        お客様は従来のお会計待ちのストレスから解放されるため、顧客満足度は向上し、<br />
                        来店のリピートが期待できます
                      </p>
                    </>
                  }
                  image={badge02}
                  spimage={badge02_sp}
                />
              </div>

              <div className={styles.contactBtn}>
                <p className='mg-auto'>＼導入費用0円！専用端末不要／</p>
                <div className='flex-cc mt-15'>
                  <Link href={'/contactus'} passHref>
                    <div><CustomButton01 name="資料請求する" className="customBtn01 large" /></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sec07}>
          <div className='comon-container'>
            <div className={styles.sec03_cont}>
              <div className='mg-auto badge_img'>
                <div className='pc mg-auto'>
                  <img src={badge} alt="の導入はカンタン" />
                </div>
                <div className='sp mg-auto'>
                  <img src={badgeSP} alt="の導入はカンタン" />
                </div>
              </div>
              <div className={styles.sec07_cards}>
                <h5>加盟店お申し込み方法</h5>
                <div className={styles.lists}>
                  <Card cardTitle="POS連携" image={image40}>
                    <p>対応しているPOSの場合<br />簡単に作業は完了</p>
                  </Card>
                  <Card cardTitle="初期設定" image={image41}>
                    <p>弊社でお店のイメージに合った<br />画面デザインの設定、<br />QRコードを生成いたします</p>
                  </Card>
                  <Card cardTitle="利用開始" image={image42}>
                    <p>QRコードを各テーブルに<br />設置、お客様に<br />ご利用いただけます</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec08}>
          <div className={styles.sec08_header}>
            <div className={styles.sec08_header_logo}>
              <img src={sec07_logo} alt="sec07_logo" />
            </div>
            <p> 飲食店様・お客様・スタッフの<br />３者に便利なサービスです</p>
          </div>
          <div className={styles.sec08_body}>
            <div className='comon-container'>
              <div className={styles.body_content}>
                <div className={styles.phonehead}>
                  セルフ会計サービス<br className='sp' />【qlub】のご紹介
                </div>
                <div className={styles.phone}>
                  <video className={styles.intro_video} src={intro_video} controls controlsList="nodownload"></video>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec09}>
          <LineSpace className="sectionSpace" title="導入のメリット" />
          <div className='comon-container'>
            <div className={styles.sec09Container}>
              <BenefitCard
                title="顧客満足度アップ"
                badge={benefit01}
                texts_header={
                  <>
                    <div>
                      <span className='col_red underline_yellow'>お会計時間わずか10秒！</span>
                    </div>
                    <p className='com_title'>お客様はお席でQRコードを読み取り<br />
                      そのままお支払いが出来ます</p>
                  </>
                }
                texts_body={
                  <p>今までにないスムーズなお会計の体験を提供することで、
                    外食の時間を楽しんでいただき、お店の印象アップに繋がります</p>
                }
                mainImage={benefit01_main}
              />
              <div className='mt-124'>
                <BenefitCard
                  title="店舗効率アップ"
                  badge={benefit02}
                  texts_header={
                    <>
                      <div>
                        <span className='col_red underline_yellow'>
                          お会計は確認作業のみ！
                        </span>
                      </div>
                      <p className='com_title'>お会計業務の解消で店舗の効率アップ</p>
                    </>
                  }
                  texts_body={
                    <p>お会計のやり取りが省略され、レジ回りの業務負荷が軽減されます <br />
                      また、すばやく次のお客様を迎え入れられ、回転率向上が実現します</p>
                  }
                  mainImage={benefit02_main}
                />
              </div>
              <div className='mt-124'>
                <BenefitCard
                  title="新たな収益を実現"
                  badge={benefit03}
                  texts_header={
                    <>
                      <div>
                        <span className='col_red underline_yellow'>
                          チップ機能で収益増！
                        </span>
                      </div>
                      <p className='com_title'>スタッフに還元することで<span className='underline_yellow'>モチベーションの向上にも繋がります</span></p>
                    </>
                  }
                  texts_body={
                    <p>「お店を応援する」チップ機能で増収益、スタッフに還元すれば、モチベーションの向上が図れます</p>
                  }
                  mainImage={benefit03_main}
                />
              </div>

              <div className='mt-124'>
                <BenefitCard
                  title="口コミ件数増加"
                  badge={benefit04}
                  texts_header={
                    <>
                      <p className='com_title'>お会計後にGoogleクチコミ投稿を促し、<span className='col_red underline_yellow'>レビューの増加を狙います</span>MEO対策にも効果的</p>
                    </>
                  }
                  texts_body={
                    <p>会計後にGoogle口コミの投稿を促し、レビューの増加を狙います
                      MEO対策にも効果的で、新規顧客の獲得も見込めます</p>
                  }
                  mainImage={benefit04_main}
                />
              </div>

            </div>
          </div>
        </section>
        <section className={styles.sec10}>
          <div className='comon-container'>
            <div className={styles.sec10_mark}>
              <div className='pc mg-auto'>
                <img src={sec10_mark} alt=" 支払い状況・売上分析の管理も簡単" />
              </div>
              <div className='sp mg-auto'>
                <img src={sec10_mark_sp} alt=" 支払い状況・売上分析の管理も簡単" />
              </div>

            </div>
            <div className={styles.sec10_content}>
              <div className={styles.topcont}>
                <div>
                  <div className={styles.number}>
                    <img src={icon_01} alt="01" />
                  </div>
                  <div className={styles.number_cont}>
                    <span>管理画面で各テーブルの<br className='sp' />支払状況を<br />簡単に把握できます</span>
                  </div>
                  <div className={styles.number_img}>
                    <img src={sec10_02} alt="sec10_02" />
                  </div>
                </div>
                <div>
                  <div className={styles.number}>
                    <img src={icon_02} alt="01" />
                  </div>
                  <div className={styles.number_cont}>
                    <span> 売上の分析や管理も<br />簡単にできます</span>
                  </div>
                  <div className={styles.number_img}>
                    <img src={sec10_03} alt="sec10_03" />
                  </div>
                </div>
              </div>
              <div className={styles.bottomcont}>
                <div className={styles.mark}>
                  <img src={sec10_04} alt=" 導入店舗様の負担0" />
                </div>
                <div className={styles.smallCards}>
                  <SmallCard
                    cardTitle="導入費用は完全無料"
                    image={icon_yen}
                  >
                    <p>導入には一切の費用が掛かりません</p>
                  </SmallCard>
                  <SmallCard
                    cardTitle="クレジットカード手数料のみ"
                    image={icon_credit}
                  >
                    <p>現在ご利用中の<span className={styles.col_red}>カード決済手数料同等、</span>負担額は増えません</p>
                  </SmallCard>
                  <SmallCard
                    cardTitle="契約期間の縛りなし"
                    image={icon_pay}
                  >
                    <p>解約をご希望の場合も
                      スムーズに<br />対応し、<span className={styles.col_red}>解約手数料も無料</span></p>
                  </SmallCard>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sec11}>
          <LineSpace className="sectionSpace" title="導入店舗さまの声" />
          <div className='comon-container'>
            <div className={styles.sec11_header}>
              <p>qlubを導入いただいた</p>
              <div>
                <h6>飲食店のオーナさまの声<br className='sp' /></h6>
              </div>
              <div className={styles.decoration}>
                <img src={sec11_arrow} alt="decoration" />
              </div>
            </div>
            <div className={styles.sec11_body}>
              <div>
                <VoiceCard
                  image={lastimg}
                  title="大阪府 なんば H店さま"
                  texts={
                    <p>
                      会計業務の負担が減り、丁寧な接客やお客様と<br className='pc' />の
                      コミュニケーションが図れています。<br />
                      接客に集中することで、お客様のお顔も覚えやす<br className='pc' />くなり、常連さんが増えました。<br />
                      また、チップ機能では予定外の収益も見込め、<br className='pc' />スタッフは喜んでおります。<br />
                      導入して本当に良かったです！
                    </p>
                  }
                  badge={sec11_badge}
                />
              </div>
              <div className='mt-160'>
                <VoiceCard
                  image={lastimg01}
                  title="愛知県 久屋大通 Y店さま　"
                  texts={
                    <p>
                      他の飲食店でお客様として利用した際、会計を待つストレスを利用者として感じていました。<br />
                      qlubのサービスを知り、店舗の回転率も上がり、スムーズなお会計でお客様にも有益だと感じています。
                    </p>
                  }
                  badge={sec11_badge2}
                />
              </div>
              <div className='mt-160'>
                <VoiceCard
                  image={lastimg02}
                  title="東京都 表参道 S店さま"
                  texts={
                    <p>
                      元々キャッシュレス決済のクレジットカード払いとApple Pay払いに対応していました。<br />
                      ランチタイムの混み合う時間に、お客様をお待たせする事が多く心苦しく感じていたので<br />
                      導入を決めました！<br />
                      顧客体験としても喜んでいただけています。
                    </p>
                  }
                  badge={sec11_badge3}
                />
              </div>
            </div>
          </div>
          <div className='index_last_ bgff5'>
            <div className={styles.contactBtn}>
              <div className='flex-cc'>
                <Link href={'/contactus'} passHref>
                  <div><CustomButton01 name="資料請求する" className="customBtn01 large" /></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}