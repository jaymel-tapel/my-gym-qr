import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className="sticky top-0 bg-black p-4">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-white text-2xl" style={{ fontFamily: 'Saira Stencil One' }}>
                        <FontAwesomeIcon icon={faDumbbell} className="mr-2 text-2xl text-red-500" />
                        Mein Fitnessstudio
                    </h2>
                </div>
            </div>
        </nav>
    );
};

export default Header;