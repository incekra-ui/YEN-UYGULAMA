export type UserType = 'Üretici' | 'Satıcı' | 'Toptancı' | 'Fabrika' | 'İhracatçı' | 'Bireysel Alıcı' | 'Kurumsal Firma';

export interface UserProfile {
  uid: string;
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  email: string;
  profilePhotoUrl?: string;
  selectedProducts: string[];
  userTypes: UserType[];
  favorites: string[];
  notificationPreferences: {
    priceAlarm: boolean;
    newAd: boolean;
    news: boolean;
    campaign: boolean;
  };
  lastLoginDate: Date;
  createdAt: Date;
}
