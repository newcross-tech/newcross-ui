module.exports = () => {
  const region = 'eu-west-2';

  const productionSetting = {
    bucketName: 'design-system.newcrosshealthcare.com',
    region,
  };
  const acceptanceSetting = {
    bucketName: 'acceptance.design-system.newcrosshealthcare.com',
    region,
  };

  return {
    production: productionSetting,
    acceptance: acceptanceSetting,
  };
};
