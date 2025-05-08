module.exports = () => {
  const region = 'eu-west-2';
  const certificateArn =
    'arn:aws:acm:us-east-1:${aws:accountId}:certificate/ca6c2f70-ca2a-42c1-8cce-50ffbad845b4';
  const domainHostedZoneId = 'Z08576563TBGWX31WNB89';
  const globalHostedZoneId = 'Z2FDTNDATAQYW2';

  const productionSetting = {
    bucketName: 'www.halodesignsystem.com',
    region,
    certificateArn,
    domainHostedZoneId,
    globalHostedZoneId,
    recordSet: 'www.halodesignsystem.com',
  };
  const acceptanceSetting = {
    bucketName: 'acceptance.halodesignsystem.com',
    region,
    certificateArn,
    domainHostedZoneId,
    globalHostedZoneId,
    recordSet: 'acceptance.halodesignsystem.com',
  };

  return {
    production: productionSetting,
    acceptance: acceptanceSetting,
  };
};
