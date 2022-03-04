module.exports = () => {
  const region = 'eu-west-2';

  const prodSetting = {
    bucketName: 'design-system.newcrosshealthcare.com',
    region,
  };
  const acceptanceSetting = {
    bucketName: 'acceptance.design-system.newcrosshealthcare.com',
    region,
  };

  return {
    prod: prodSetting,
    acceptance: acceptanceSetting,
  };
};
