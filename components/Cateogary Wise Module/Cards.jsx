import cx from 'classnames'
import CateogaryCardStyle from '../../styles/CateogaryBlock.module.scss'
import data from '../../FakeData/index.json'
import Link from 'next/link'
import Image from 'next/image'

export default function CateogaryCards({ image, PostHead, date, time, slug }) {
    return (
        <div className={cx(CateogaryCardStyle.collg4, CateogaryCardStyle.colmd6, CateogaryCardStyle.mtmd0, CateogaryCardStyle.mt4, CateogaryCardStyle.padOnSmall)}>
            <div className={CateogaryCardStyle.card}>
                <div className={cx(CateogaryCardStyle.cardheader, CateogaryCardStyle.p0, CateogaryCardStyle.positionrelative)}>
                    <Link href={`/posts/${slug}`} passHref>
                        <a>
                            {/* <img className={cx(CateogaryCardStyle.cardimgbottom, CateogaryCardStyle.dblock, CateogaryCardStyle.radiusimagefull)} src={image} style={{ height: `15em` }} alt={`${PostHead}'s Image`} /> */}
                            <Image className={cx(CateogaryCardStyle.cardimgbottom, CateogaryCardStyle.dblock, CateogaryCardStyle.radiusimagefull)} src={image} width={`369`} height={`250`} alt={`${PostHead}'s Image`} />
                            {/* <Image className={cx(CateogaryCardStyle.cardimgbottom, CateogaryCardStyle.dblock, CateogaryCardStyle.radiusimagefull)} src={image} height={`15em`} alt={`${PostHead}'s Image`} /> */}
                        </a>
                    </Link>
                </div>
                <div className={cx(CateogaryCardStyle.cardbody, CateogaryCardStyle.blogdetails)} style={{ height: `12em` }}>
                    <Link href={`/posts/${slug}`} passHref>
                        <a className={CateogaryCardStyle.blogdesc}>{PostHead}</a>
                    </Link>
                    <div className={cx(CateogaryCardStyle.author, CateogaryCardStyle.alignitemscenter)}>
                        {/* <img src={data.ownerImage} alt={`${data.ownerName}'s Image`} className={cx(CateogaryCardStyle.imgfluid, CateogaryCardStyle.roundedcircle)} /> */}
                        <Image src={data.ownerImage} alt={`${data.ownerName}'s Image`} width={`63`} height={`50`} className={cx(CateogaryCardStyle.imgfluid, CateogaryCardStyle.roundedcircle)} />
                        <ul className={CateogaryCardStyle.blogmeta}>
                            <Link href={data.portfolioLink} passHref>
                                <li>
                                    <a>{data.ownerName}</a>
                                </li>
                            </Link>
                            <li className={cx(CateogaryCardStyle.metaitem, CateogaryCardStyle.bloglesson)}>
                                <span className={CateogaryCardStyle.metavalue}> {date} </span>. <span className={cx(CateogaryCardStyle.metavalue, CateogaryCardStyle.ml2)}><span className={cx(CateogaryCardStyle.fa, CateogaryCardStyle.faclocko)} /> at {time}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}