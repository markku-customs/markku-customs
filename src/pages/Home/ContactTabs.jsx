import { Fragment } from 'react';

import { Tab } from '@headlessui/react';
import { clsx } from 'clsx';
import { useTranslation } from 'react-i18next';

const ContactTabs = () => {
  const { t } = useTranslation();

  return (
    <aside className="w-full lg:max-w-md">
      <Tab.Group>
        <Tab.List className="flex bg-zinc-900">
          <Tab as={Fragment} className="w-full text-sm font-semibold">
            {({ selected }) => (
              <button
                type="button"
                className={clsx('h-full w-full py-4', selected && 'bg-red-600')}
              >
                {t('tabs.delivery-options')}
              </button>
            )}
          </Tab>
          <Tab as={Fragment} className="w-full text-sm font-semibold">
            {({ selected }) => (
              <button
                type="button"
                className={clsx('h-full w-full py-4', selected && 'bg-red-600')}
              >
                {t('tabs.guarantees')}
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel className="bg-zinc-900 p-4 lg:p-6">
            <div className="flex flex-col gap-4">
              <PanelItem title={`${t('tabs.pickup')} – 0€`} subtitle="Turku" />
              <PanelItem
                title={`${t('tabs.home-delivery')} – 15€`}
                subtitle={t('tabs.turku-region')}
              />
            </div>
          </Tab.Panel>
          <Tab.Panel className="bg-zinc-900 p-4 lg:p-6">
            <div className="flex flex-col gap-4">
              <PanelItem
                title={t('tabs.money-back')}
                subtitle={t('tabs.14-days')}
              />
              <PanelItem
                title={t('tabs.warranty')}
                subtitle={t('tabs.1-year')}
              />
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </aside>
  );
};

export default ContactTabs;

const PanelItem = ({ title, subtitle }) => {
  return (
    <div className="border-l-4 border-red-600 px-4 py-2">
      <p className="text-sm lg:text-base">{title}</p>
      <p className="text-xs text-zinc-400 lg:text-sm">{subtitle}</p>
    </div>
  );
};
