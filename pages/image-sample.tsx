import { NextPage } from "next";
import Image from "next/image";

import CatImage from '../public/images/myoctcat.png'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/myoctcat.png" alt="" />
      <p>Imageコンポーネントで表示した場合</p>
      <Image  src={CatImage} />
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  )
}

export default ImageSample
