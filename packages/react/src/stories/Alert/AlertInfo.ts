const TITLE = 'Alert';

const DESCRIPTION =
  'In-line alerts display a non-modal message contectual to another object in a view. </br></br>' +
  'They cannot be dismissed or removed, they are static cards. </br></br>' +
  'These are often used in form validation, providing a place to provide feedback related to multiple fields or to inform users of something to come. </br></br>' +
  'Our in-line alerts communicate: </br>' +
  ' <ul> <li> Success </li>  </br><li> Warning </li>  </br><li> Error  </li> </br> <li> Info</li>  </br></ul>' +
  'Each have an assigned colour and this remain consistent and not be changed, as our users will become used to their reference.  </br> </br>' +
  'Our in-line alert banners have fixed elements of an; icon, title, message. With an optional link, if it is needed to fulfill the intention. </br> </br>' +
  'Only the link is clickable, not the entire card.';

const DO = ['Use each in-line alert appropriately to it’s intention.'];

const DONT = [
  'Change the colours of any in-line alerts.',
  'Change the icons used in each variant. They are appropriate to their context.',
];

export { TITLE, DESCRIPTION, DO, DONT };
