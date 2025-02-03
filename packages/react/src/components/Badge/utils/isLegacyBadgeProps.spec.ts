import { BadgeProps } from '../Badge';
import { BadgeType } from '../Badge.types';
import { Scheme } from '../../../types';
import { isLegacyBadgeProps } from './';

describe('isLegacyBadgeProps', () => {
  it('should return true if LegacyBadgeProps specific properties are present', () => {
    // Arrange
    const props: BadgeProps = {
      size: 'large',
      position: 'topRight',
      badgeContent: 10,
      hasCutout: true,
    };

    // Act
    const result = isLegacyBadgeProps(props);

    // Assert
    expect(result).toBe(true);
  });

  it('should return false if no LegacyBadgeProps-specific properties are present', () => {
    // Arrange
    const props: BadgeProps = {
      size: 'large',
      badgeContent: 10,
      maxNumber: 999,
      type: 'default' as BadgeType,
      scheme: 'light' as Scheme,
    };

    // Act
    const result = isLegacyBadgeProps(props);

    // Assert
    expect(result).toBe(false);
  });

  it('should return false for empty props', () => {
    // Arrange
    const props: BadgeProps = {
      size: 'large',
      badgeContent: 10,
    };

    // Act
    const result = isLegacyBadgeProps(props);

    // Assert
    expect(result).toBe(false);
  });

  it('should return true for props containing only one LegacyBadgeProps-specific property', () => {
    // Arrange
    const props: BadgeProps = {
      size: 'medium',
      badgeContent: 5,
      position: 'bottomLeft', // Only one LegacyBadgeProps-specific property
    };

    // Act
    const result = isLegacyBadgeProps(props);

    // Assert
    expect(result).toBe(true);
  });

  it('should handle props with empty strings or undefined LegacyBadgeProps-specific properties', () => {
    // Arrange
    const props: BadgeProps = {
      size: 'small',
      badgeContent: 0,
      position: undefined, // Undefined LegacyBadgeProps property
      hasCutout: false,
    };

    // Act
    const result = isLegacyBadgeProps(props);

    // Assert
    expect(result).toBe(true);
  });
});
