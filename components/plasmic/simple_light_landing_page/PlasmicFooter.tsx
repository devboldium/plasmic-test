// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ki15SzMenR7qZ3gsigBUcH
// Component: 3cit5VhmuOA
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: OYYxZh90EPr/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Xr1dkMdTOcmN/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: ki15SzMenR7qZ3gsigBUcH/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: 3cit5VhmuOA/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: g4u4ORpj6cSi/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: gBuDPsJ1huq0/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: 4pVM9GbY7ERT/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: 4btLEzrxjTU2/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: -K8ZT2ylvFh_/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  dataFetches?: PlasmicFooter__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.freeBox__uy93K)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox__nAom)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__udwt1)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__o7Qqz)}
            icon={
              <LogoIcon
                className={classNames(defaultcss.all, sty.svg__sC2Qj)}
                role={"img"}
              />
            }
          />

          <div className={classNames(defaultcss.all, sty.freeBox__veJi)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__u8E6C
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Terms"}
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__sElBt
              )}
            >
              {" ?? "}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__kGoit
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__io6Xj)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__jzz8T)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__tZuPq
              )}
            >
              {"Products"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___8Agm7
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Web Studio"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__dGatv
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"DynamicBox Flex"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__nWx0N
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Programming Forms"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__tzNRu
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Integrations"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__elcKh
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Command-line"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__ebw9)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__qcyJl
              )}
            >
              {"Resources"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__t2VEh
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Documentation"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__rpCoc
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Tutorials & Guides"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ouGp7
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Blog"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__fiOwR
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Support Center"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__axMgw
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Partners"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__b2NoR)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__nf6Px
              )}
            >
              {"Company"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__d5CrG
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Home"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___5YpjU
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__dOous
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Company values"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__tupUe
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__t1CNc
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy policy"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.freeBox__xOyXn)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__l1MzF
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__qumNf
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___5Lx3Q)}>
              <input
                data-plasmic-name={"textbox"}
                data-plasmic-override={overrides.textbox}
                className={classNames(defaultcss.input, sty.textbox)}
                placeholder={"Your email" as const}
                size={1 as const}
                type={"text" as const}
                value={"" as const}
              />

              <div className={classNames(defaultcss.all, sty.freeBox__pOTer)} />

              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(defaultcss.button, sty.button)}
              >
                <IconIcon
                  className={classNames(defaultcss.all, sty.svg__utTqu)}
                  role={"img"}
                />
              </button>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.freeBox__bQscq)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.freeBox___8JSl)}
      >
        <div className={classNames(defaultcss.all, sty.freeBox__hhtIs)}>
          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__isKUj
            )}
            component={Link}
            href={"https://cruip.com/" as const}
            platform={"nextjs"}
          >
            {"Designed by Cruip. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__vo79G
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Built in Plasmic. "}
          </p.PlasmicLink>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.freeBox__kAUhn
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.freeBox__nDg1E)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__qezUe)}
            icon={
              <TwitterIconIcon
                className={classNames(defaultcss.all, sty.svg__ofDta)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__g0K4J)}
            icon={
              <GithubIconIcon
                className={classNames(defaultcss.all, sty.svg___1Grkq)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__ozn50)}
            icon={
              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg___3ByYb)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter__VariantsArgs;
    args?: PlasmicFooter__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicFooter__Fetches;
  } & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
