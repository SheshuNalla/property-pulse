import { 
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  XShareButton,
  FacebookIcon,
  WhatsappIcon,
  EmailIcon,
  XIcon
 } from 'react-share';

const ShareButtons = ({ property }) => {

  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
  return (
    <>
      <h3 className="text-xl font-bold text-center pt-2">Share This Property:</h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton 
          url={shareUrl}
          quote={property.name}
          hashtag={ `#${property.type}ForRent` }
        >
          <FacebookIcon size={35} round={true}/>
        </FacebookShareButton>
        <XShareButton 
          url={shareUrl}
          title={property.name}
          hashtags={ [`${property.type.replace(/\s/g, '')}ForRent`] }
        >
          <XIcon size={35} round={true}/>
        </XShareButton>
        <WhatsappShareButton 
          url={shareUrl}
          title={property.name}
          seperator=':: '
        >
          <WhatsappIcon size={35} round={true}/>
        </WhatsappShareButton>
        <EmailShareButton 
          url={shareUrl}
          subject={property.name}
          body={`Checkout this property listing: ${shareUrl}`}
        >
          <EmailIcon size={35} round={true}/>
        </EmailShareButton>
      </div>

    </>
  )
}

export default ShareButtons