import { useState, useEffect } from "react";

interface BatteryManager {
	level: number;
	charging: boolean;
	chargingTime: number;
	dischargingTime: number;
	addEventListener(
		type: string,
		listener: EventListener | EventListenerObject | null,
		options?: boolean | AddEventListenerOptions,
	): void;
	removeEventListener(
		type: string,
		listener: EventListener | EventListenerObject | null,
		options?: boolean | EventListenerOptions,
	): void;
}

interface BatteryState {
	supported: boolean;
	loading: boolean;
	level: number | null;
	charging: boolean | null;
	chargingTime: number | null;
	dischargingTime: number | null;
}

interface NavigatorWithBattery extends Navigator {
	getBattery: () => Promise<BatteryManager>;
}

export const useBattery = () => {
	const [batteryState, setBatteryState] = useState<BatteryState>({
		supported: true,
		loading: true,
		level: null,
		charging: null,
		chargingTime: null,
		dischargingTime: null,
	});

	useEffect(() => {
		const _navigator = navigator as NavigatorWithBattery;
		let battery: BatteryManager;

		const handleBatteryChange = () => {
			setBatteryState({
				supported: true,
				loading: false,
				level: battery.level,
				charging: battery.charging,
				chargingTime: battery.chargingTime,
				dischargingTime: battery.dischargingTime,
			});
		};

		if (!_navigator.getBattery) {
			setBatteryState((batteryState) => ({
				...batteryState,
				supported: false,
				loading: false,
			}));
			return;
		}

		_navigator.getBattery().then((_battery) => {
			battery = _battery;
			handleBatteryChange();

			_battery.addEventListener("levelchange", handleBatteryChange);
			_battery.addEventListener("chargingchange", handleBatteryChange);
			_battery.addEventListener("chargingtimechange", handleBatteryChange);
			_battery.addEventListener("dischargingtimechange", handleBatteryChange);
		});

		return () => {
			if (battery) {
				battery.removeEventListener("levelchange", handleBatteryChange);
				battery.removeEventListener("chargingchange", handleBatteryChange);
				battery.removeEventListener("chargingtimechange", handleBatteryChange);
				battery.removeEventListener(
					"dischargingtimechange",
					handleBatteryChange,
				);
			}
		};
	}, []);

	return batteryState;
};
