/* eslint-disable max-len */
import arrowRightBlackIcon from '@assets/icons/arrow-right-black-sm.svg';
import { Button } from '@components/.';

const FeedbackSection = () => {
  return (
    <section className="bg-[url('/src/assets/images/feedback-background.png')] bg-cover bg-center w-full px-26 py-12">
      <div className="w-2/5">
        <h2 className="text-white text-5xl mb-12">Оставьте заявку на обратный звонок</h2>
        <form>
          <div className="flex flex-col gap-5 mb-7">
            <input
              type="text"
              name=""
              placeholder="Имя"
              className="bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-xl px-6 py-5"
            />
            <input
              type="text"
              name=""
              placeholder="Телефон"
              className="bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-xl px-6 py-5"
            />
            <input
              type="text"
              name=""
              placeholder="Email"
              className="bg-transparent border border-white rounded-xl placeholder:text-white placeholder:text-xl px-6 py-5"
            />
          </div>
          <p className="text-white/90 text-base mb-8">
            Отправляя свои данные, вы соглашаетесь с условиями персональных данных
          </p>
          <Button variant="outline" borderRadius="lg" className="flex justify-between items-center w-2/5 h-15">
            <p>Отправить</p>
            <div className="bg-white border border-black rounded-3xl p-2.5">
              <img src={arrowRightBlackIcon} alt="Arrow Right" />
            </div>
          </Button>
        </form>
      </div>
    </section>
  );
};

export { FeedbackSection };
