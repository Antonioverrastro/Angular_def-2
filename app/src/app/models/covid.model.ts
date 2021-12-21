export interface ICovid {
  countriesRoute: { Path: string };
  countryDayOneRoute: { Path: string };
  countryDayOneTotalRoute: { Path: string };
  countryRoute: { Path: string };
  countryRoutePremium: { Path: string };
  countryRoutePremiumData: { Path: string };
  countryStatusDayOneLiveRoute: { Path: string };
  countryStatusDayOneRoute: { Path: string };
  countryStatusDayOneTotalRoute: { Path: string };
  countryStatusLiveRoute: { Path: string };
  countryStatusRoute: { Path: string };
  countryStatusTotalRoute: { Path: string };
  countrySummaryRoutePremium: { Path: string };
  countryTestingPremium: { Path: string };
  countryTotalRoute: { Path: string };
  exportRoute: { Path: string };
  liveCountryRoute: { Path: string };
  liveCountryStatusAfterDateRoute: { Path: string };
  liveCountryStatusRoute: { Path: string };
  summaryRoute: { Path: string };
  travelAdvicePremium: { Path: string };
  webhookRoute: { Path: string };
}

export class Covid {
  protected constructor(
    public countriesRoute = { Path: '' },
    public countryDayOneRoute = { Path: '' },
    public countryDayOneTotalRoute = { Path: '' },
    public countryRoute = { Path: '' },
    public countryRoutePremium = { Path: '' },
    public countryRoutePremiumData = { Path: '' },
    public countryStatusDayOneLiveRoute = { Path: '' },
    public countryStatusDayOneRoute = { Path: '' },
    public countryStatusDayOneTotalRoute = { Path: '' },
    public countryStatusLiveRoute = { Path: '' },
    public countryStatusRoute = { Path: '' },
    public countryStatusTotalRoute = { Path: '' },
    public countrySummaryRoutePremium = { Path: '' },
    public countryTestingPremium = { Path: '' },
    public countryTotalRoute = { Path: '' },
    public exportRoute = { Path: '' },
    public liveCountryRoute = { Path: '' },
    public liveCountryStatusAfterDateRoute = { Path: '' },
    public liveCountryStatusRoute = { Path: '' },
    public summaryRoute = { Path: '' },
    public travelAdvicePremium = { Path: '' },
    public webhookRoute = { Path: '' }
  ) {}

  public static Build(covid: ICovid): Covid {
    return new this(
      covid.countriesRoute,
      covid.countryDayOneRoute,
      covid.countryDayOneTotalRoute,
      covid.countryRoute,
      covid.countryRoutePremium,
      covid.countryRoutePremiumData,
      covid.countryStatusDayOneLiveRoute,
      covid.countryStatusDayOneRoute,
      covid.countryStatusDayOneTotalRoute,
      covid.countryStatusLiveRoute,
      covid.countryStatusRoute,
      covid.countryStatusTotalRoute,
      covid.countrySummaryRoutePremium,
      covid.countryTestingPremium,
      covid.countryTotalRoute,
      covid.exportRoute,
      covid.liveCountryRoute,
      covid.liveCountryStatusAfterDateRoute,
      covid.liveCountryStatusRoute,
      covid.summaryRoute,
      covid.travelAdvicePremium,
      covid.webhookRoute
    );
  }
}
