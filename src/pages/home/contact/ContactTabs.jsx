import { Fragment } from 'react';

import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

import { formatPrice, formatUnit } from '@/utils';

const tabs = [
  { title: 'tabs.delivery-options' },
  { title: 'tabs.payment-options' },
  { title: 'tabs.guarantees' },
];

const ContactTabs = () => {
  const { t, i18n } = useTranslation();

  const lng = i18n.language;

  return (
    <aside className="w-full lg:max-w-lg">
      <Tab.Group>
        <Tab.List className="flex flex-col divide-y divide-zinc-800 border-b border-zinc-800 bg-zinc-900 sm:flex-row sm:divide-x sm:divide-y-0">
          {tabs.map(({ title }) => (
            <Tab
              as={Fragment}
              className="w-full text-sm font-semibold"
              key={title}
            >
              {({ selected }) => (
                <button
                  type="button"
                  className={clsx(
                    'h-full w-full py-4',
                    selected
                      ? 'bg-red-600'
                      : 'text-zinc-400 transition duration-200 hover:bg-zinc-800'
                  )}
                >
                  {t(title)}
                </button>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="bg-zinc-900 p-4 lg:p-6">
            <ul className="flex flex-col gap-4">
              <PanelItem
                title={`${t('tabs.pickup')} \u2013 ${formatPrice(0, lng)}`}
                subtitle="Turku"
              />
              <PanelItem
                title={`${t('tabs.home-delivery')} \u2013 ${formatPrice(
                  15,
                  lng
                )}`}
                subtitle={t('tabs.turku-region')}
              />
              <PanelItem
                title={`${t('tabs.post')} \u2013 ${formatPrice(30, lng)}`}
                subtitle={t('tabs.finland')}
              />
            </ul>
          </Tab.Panel>
          <Tab.Panel className="bg-zinc-900 p-4 lg:p-6">
            <ul className="flex flex-col gap-4">
              <PanelItem title={t('tabs.cash')} />
              <PanelItem title="MobilePay" />
              <PanelItem title={t('tabs.bank-transfer')} />
            </ul>
          </Tab.Panel>
          <Tab.Panel className="bg-zinc-900 p-4 lg:p-6">
            <ul className="flex flex-col gap-4">
              <PanelItem
                title={t('tabs.money-back')}
                subtitle={formatUnit(
                  7,
                  { unit: 'day', unitDisplay: 'long' },
                  lng
                )}
              />
              <PanelItem
                title={t('tabs.warranty')}
                subtitle={formatUnit(
                  1,
                  { unit: 'year', unitDisplay: 'long' },
                  lng
                )}
              />
            </ul>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </aside>
  );
};

export default ContactTabs;

const PanelItem = ({ title, subtitle }) => {
  return (
    <li className="border-l-4 border-red-600 px-4 py-2">
      <p className="text-sm lg:text-base">{title}</p>
      {subtitle && (
        <p className="text-xs text-zinc-400 lg:text-sm">{subtitle}</p>
      )}
    </li>
  );
};
