import React from 'react';

import Button from '../../../components/ui/Button';

const SocialLoginButton = ({ provider, icon, onClick, disabled = false }) => {
  const getProviderStyles = () => {
    switch (provider) {
      case 'Google':
        return 'border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50';
      case 'Facebook':
        return 'border-blue-600 hover:border-blue-700 text-blue-600 hover:bg-blue-50';
      case 'LinkedIn':
        return 'border-blue-800 hover:border-blue-900 text-blue-800 hover:bg-blue-50';
      default:
        return 'border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50';
    }
  };

  return (
    <Button
      variant="outline"
      fullWidth
      onClick={onClick}
      disabled={disabled}
      className={`h-12 ${getProviderStyles()} academic-transition`}
      iconName={icon}
      iconPosition="left"
      iconSize={20}
    >
      Continue with {provider}
    </Button>
  );
};

export default SocialLoginButton;