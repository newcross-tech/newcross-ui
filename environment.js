module.exports = () => {
  const region = 'eu-west-2';
  const certificateArn =
    'arn:aws:acm:us-east-1:${aws:accountId}:certificate/1f6caec9-ff1f-48ab-9858-141f38ba7623';

  const productionSetting = {
    bucketName: 'design-system.newcrosshealthcare.com',
    region,
    certificateArn,
  };
  const acceptanceSetting = {
    bucketName: 'acceptance-design-system.newcrosshealthcare.com',
    region,
    certificateArn,
  };

  return {
    production: productionSetting,
    acceptance: acceptanceSetting,
  };
};
