import { Footer, Header, TopBar } from '@/components';
import { ContactsSection, DepartmentsSection } from '@pages/contacts/components';
import contactsBackground from '@assets/images/contacts-background.png';

const ContactsPage = () => {
  return (
    <main>
      <TopBar />
      <Header />
      <div className="px-26 my-16">
        <p className="text-neutral-900 text-xl">
          <span className="opacity-65">Главная</span> / Контакты
        </p>
      </div>
      <img src={contactsBackground} alt="Background" className="mb-16" />
      <div className="flex flex-col gap-30">
        <ContactsSection />
        <DepartmentsSection />
      </div>
      <div className="mt-50">
        <Footer />
      </div>
    </main>
  );
};

export { ContactsPage };
