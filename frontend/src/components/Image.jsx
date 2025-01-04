import { IKImage } from "imagekitio-react"


const Image = ({src,className,w,h,alt}) => {
  return (
    <IKImage
        urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
        path={src}
        loading="lazy"
        lqip={{active:true, quality:20}}
        alt={alt}
        width={w}
        height={h}
        className={className}
        transformation={[
          {
            width:w,
            height:h
          }
        ]}
    />
  )
}

export default Image