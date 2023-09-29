'use client'

import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { TabItem } from './TabItem'

export function SettingTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="my-details"
              title="My details"
              isSelected={currentTab === 'my-details'}
            />
            <TabItem
              value="profile"
              title="Profile"
              isSelected={currentTab === 'profile'}
            />
            <TabItem
              value="password"
              title="Password"
              isSelected={currentTab === 'password'}
            />
            <TabItem
              value="teams"
              title="Team"
              isSelected={currentTab === 'teams'}
            />
            <TabItem
              value="plans"
              title="Plan"
              isSelected={currentTab === 'plans'}
            />
            <TabItem
              value="billing"
              title="Billing"
              isSelected={currentTab === 'billing'}
            />
            <TabItem
              value="email"
              title="Email"
              isSelected={currentTab === 'email'}
            />
            <TabItem
              value="notifications"
              title="Notifications"
              isSelected={currentTab === 'notifications'}
            />
            <TabItem
              value="integrations"
              title="Integrations"
              isSelected={currentTab === 'integrations'}
            />
            <TabItem
              value="api"
              title="API"
              isSelected={currentTab === 'api'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="translate-y flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
