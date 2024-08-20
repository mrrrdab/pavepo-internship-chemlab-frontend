/* eslint-disable max-len */
import centralOfficeImage from '@assets/images/central-office.png';
import warehouseImage from '@assets/images/warehouse.png';

import { ContactDetailsItem } from './ContactDetailsItem';
import { ContactDetailsCard } from './ContactDetailsCard';

const ContactsSection = () => {
  return (
    <section className="flex flex-col gap-30 px-26">
      <div className="flex flex-col gap-8">
        <ContactDetailsItem
          title="Контакты | Москва"
          address='115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4/9, (на территории бизнес-центра "Сириус Парк"), ООО ТД “ХИММЕД”'
          phoneNumber="+7 (499) 380-80-16"
          email="mail38@chimmed.ru"
        />
        <ContactDetailsItem
          title="Контакты | СМИ"
          address='115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4/9, (на территории бизнес-центра "Сириус Парк"), ООО ТД “ХИММЕД”'
          phoneNumber="+7 (965) 380-89-38"
          email="pr@chimmed.ru"
        />
      </div>
      <div className="flex gap-5">
        <div className="flex-1 min-w-0">
          <ContactDetailsCard imgSrc={centralOfficeImage} title="Центральный офис">
            <div className="flex flex-col gap-2.5">
              <h4 className="text-neutral-900 text-2xl">Адрес:</h4>
              <p className="text-neutral-900 text-xl">
                115230, Москва, Каширское шоссе, дом 3, корпус 2, строение 4/9, Бизнес центр &quot;Сириус Парк&quot;
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-neutral-900 text-2xl">Телефон:</h4>
              <a href="tel: +7 (965) 380-89-38" className="text-neutral-900 text-xl underline">
                +7 (965) 380-89-38
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-neutral-900 text-2xl">Email:</h4>
              <a href={`mailto: mail38@chimmed.ru`} className="text-neutral-900 text-xl">
                mail38@chimmed.ru
              </a>
            </div>
          </ContactDetailsCard>
        </div>
        <div className="flex-1 min-w-0">
          <ContactDetailsCard imgSrc={warehouseImage} title="Склад">
            <div className="flex flex-col gap-2.5">
              <h4 className="text-neutral-900 text-2xl">Адрес:</h4>
              <p className="text-neutral-900 text-xl">142103, г. Подольск Московской области, ул. Бронницкая, д. 5</p>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-neutral-900 text-2xl">Телефон:</h4>
              <a href="tel: +7 (905) 777-41-39" className="text-neutral-900 text-xl underline">
                +7 (905) 777-41-39
              </a>
            </div>
            <div className="flex flex-col gap-2.5">
              <h4 className="text-neutral-900 text-2xl">Телефон для заказа пропуска:</h4>
              <div className="flex gap-2">
                {['+7 (905) 777-59-15', '+7 (495) 721-49-61'].map((phone, index, array) => (
                  <div key={index} className="text-neutral-900 text-xl">
                    <a href={`tel:${phone}`} className="underline">
                      {phone}
                    </a>
                    {index < array.length - 1 && <span>, </span>}
                  </div>
                ))}
              </div>
            </div>
          </ContactDetailsCard>
        </div>
      </div>
    </section>
  );
};

export { ContactsSection };
