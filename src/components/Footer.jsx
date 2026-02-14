import { Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="py-10 bg-gray-950 border-t border-gray-900 mt-20">
            <div className="container mx-auto px-4 text-center">
                <p className="text-gray-500 mb-2 flex items-center justify-center gap-2">
                    &copy; {new Date().getFullYear()} Fatih. {t('footerRights')}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <span>{t('footerMadeWith')}</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
